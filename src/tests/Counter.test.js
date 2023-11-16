// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';
import { click } from '@testing-library/user-event/dist/click';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initCount = screen.getByTestId('count');
  expect(initCount).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  // reference: https://stackoverflow.com/questions/63000516/how-to-getbyrole-a-button-with-image-in-react-testing-library
  const buttonInc = screen.getByRole('button', { name: '+' });
  for (let i = 1; i <= 7; i++){
    userEvent.click(buttonInc);
    expect(screen.getByTestId('count')).toHaveTextContent(i);
  }
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const buttonInc = screen.getByRole('button', { name: '-' });
  for (let i = 1; i <= 7; i++){
    userEvent.click(buttonInc);
    expect(screen.getByTestId('count')).toHaveTextContent(-i);
  }

});
