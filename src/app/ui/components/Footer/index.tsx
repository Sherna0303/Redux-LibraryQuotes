import { ReactElement } from 'react';
import './style.css';
import { Paragraph } from '../../elements/Paragraph';

export const Footer = (): ReactElement => {
  return (
    <footer className='main__footer'>
      <Paragraph className='main__copyright' text='© 2024 Sebastian Hernandez'/>
    </footer>
  );
};