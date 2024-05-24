import { ReactElement } from 'react';
import './style.css';
import { Paragraph } from '../../elements/Paragraph';
import Icon from '../../elements/Icon/inde';
import { useAside } from '../../../core/hooks/useAside';
import { toggleAside } from '../../../core/store/reducers/aside.reducer';

export const Header = (): ReactElement => {
  const { dispatch, showAside } = useAside();

  return (
    <header className='header__container'>
      <div className="header__main">
        <div className="header__logo-container">
          <Icon color='white' size={32} icon='book-2'/>
          <Paragraph className='logo__text' text='BookStore'/>
        </div>
        <button className='header__cart' onClick={() => dispatch(toggleAside())}>
          <Icon color='white' size={32} icon={showAside ? 'shopping-cart-x' : 'shopping-cart'}/>
        </button>
      </div>
    </header>
  );
};