import { describe } from 'vitest'
import App from './App';
import {render} from '@testing-library/react';

describe('App', () => {
  describe('Dui UI', ()=>{
  it('should render', () => {
    render(<App/>);
  })
  it('should have title "Mi DUI es valido?', () => {
    render(<h1 className='text-5xl font-bold'>Mi DUI es valido?</h1>);
  })
  it('should have an input text', () => {
    render(<button className='bg-blue-700 text-white w-auto py-2 px-3 rounded'>Validar</button>);
  })
  it('should have a button with text "Validar', () => {
    render(<input
      placeholder='000000000'
      className='rounded p-2 w-full'
    />);
  })
  })
})
