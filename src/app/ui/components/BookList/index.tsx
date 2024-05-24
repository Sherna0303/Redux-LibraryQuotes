import { BookItem } from '../BookItem';
import { Copy } from '../../../core/models/copy.model';
import './style.css';
import { Title } from '../../elements/Title';
import { useCart } from '../../../core/hooks/useCart';

interface BooksListProps {
    books: Copy[];
    addToCart: (copy: Copy) => void;
  }
  
const BooksList: React.FC<BooksListProps> = ({ books, addToCart }) => {
  const {activeCart} = useCart();
  const bag = activeCart?.items;
  return (
    <div className='books__container'>
      <Title type='h1' text='Books List' className='books__title'/>
      <ul className='books__list'>
        {books.map((book) => (
          <BookItem key={book.id} book={book} isInCart={bag?.some(item => item.id === book.id) || false} addToCart={addToCart}/>
        ))}
      </ul>
    </div>
  );
};
  
export default BooksList;