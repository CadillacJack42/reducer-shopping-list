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
  });
});
