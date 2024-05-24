import { ReactElement } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import BooksPage from '../../../pages/list-book.page';

export const LayoutMain = (): ReactElement => {
  return(
    <>
      <Header />
      <main>
        <BooksPage/>
      </main>
      <Footer />
    </>
  );
};