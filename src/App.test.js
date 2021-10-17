import { render, screen, shallow } from '@testing-library/react';
import Header from 'components/Header/Header';
import Property from 'components/Property/Property'

describe(('Header Tests'), () => {
  test('header matches snapshot', () => {
    const component = render(<Header/>);

    expect(component).toMatchSnapshot();
  });

  test('header contains correct text', () => {
    render(<Header/>);

    const element = screen.getByText(/Property Listings/i);
    expect(element).toBeInTheDocument();
  });
});

describe('Property Tests', () => {
  test('property matches snapshot', () => {
    const component = render(<Property/>);
  
    expect(component).toMatchSnapshot();
  });

  test('property to have listing price', () => {
    const price = '$4,000,000'
    render(<Property listPrice={price}/>)
    
    expect.objectContaining({
      price: '$4,000,000'
    })
  });
});
