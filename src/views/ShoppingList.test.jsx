import { screen, render, waitfor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Should test the app', () => {
  it('Should find Header content', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const welcomeMessage = screen.getByRole('heading', { level: 1 });
    expect(welcomeMessage).toHaveTextContent(
      /welcome to cadillac jacks reducer shopping list/i
    );
    const cartCount = screen.getByRole('heading', { level: 4 });
    expect(cartCount).toHaveTextContent(/items in cart/i);
  });

  it('Should test UI for list items', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const checkBoxes = screen.getAllByLabelText('item-checkbox');
    expect(checkBoxes[0].checked).toBe(false);
    userEvent.click(checkBoxes[0]);
    expect(checkBoxes[0].checked).toBe(true);

    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveTextContent(/i'm a shopping list item/i);
    const editButtons = screen.getAllByLabelText('begin-edit-button');
    userEvent.click(editButtons[0]);
    const saveButton = screen.getByLabelText('edit-form-button');
    const editForm = screen.getByLabelText('edit-form-input');
    userEvent.type(editForm, 'new list item');
    userEvent.click(saveButton);
    expect(items[0]).toHaveTextContent(/new list item/i);

    const deleteButtons = screen.getAllByLabelText('delete-item-button');
    userEvent.click(deleteButtons[0]);
    const newItems = screen.getAllByRole('list');
    expect(newItems[0].children).toHaveLength(0);
  });
});
