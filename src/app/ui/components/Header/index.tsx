import { ReactElement } from 'react';
import './style.css';
import { Paragraph } from '../../elements/Paragraph';
import Icon from '../../elements/Icon/inde';

export const Header = (): ReactElement => {
  return (
    <header className='header__container'>
      <div className="header__main">
        <div className="header__logo-container">
          <Icon color='white' size={32} icon='book-2'/>
          <Paragraph className='logo__text' text='BookStore'/>
        </div>
        <Icon color='white' size={32} icon='shopping-cart'/>
      </div>
    </header>
  );
};