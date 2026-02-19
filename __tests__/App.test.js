import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders the secondary text presence', () => {
    const { getByText } = render(<App />);
    expect(getByText('This is the future')).toBeTruthy();
  });

  it('renders exact secondary content and color', () => {
    const { getByTestId } = render(<App />);
    const futureText = getByTestId('future-text');
    expect(futureText.props.children).toBe('This is the future');
    expect(futureText.props.style).toEqual(
      expect.objectContaining({ color: 'green' })
    );
  });
});
