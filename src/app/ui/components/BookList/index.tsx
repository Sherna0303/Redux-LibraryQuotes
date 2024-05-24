import { BookItem } from '../BookItem';
import { Copy } from '../../../core/models/copy.model';
import './style.css';
import { Title } from '../../elements/Title';

interface BooksListProps {
    books: Copy[];
    addToCart: (copy: Copy) => void;
  }
  
const BooksList: React.FC<BooksListProps> = ({ books, addToCart }) => {
  return (
    <div className='books__container'>
      <Title type='h1' text='Books List' className='books__title'/>
      <ul className='books__list'>
        {books.map((book) => (
          <BookItem key={book.id} book={book} isInCart={false} addToCart={addToCart}/>
        ))}
      </ul>
    </div>
  );
};
  
export default BooksList;