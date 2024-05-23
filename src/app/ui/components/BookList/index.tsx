import { BookItem } from '../BookItem';
import { Copy } from '../../../core/models/copy.model';

interface BooksListProps {
    books: Copy[];
    addToCart: (copy: Copy) => void;
  }
  
const BooksList: React.FC<BooksListProps> = ({ books, addToCart }) => {
  return (
    <ul className='books__container'>
      {books.map((book) => (
        <BookItem key={book.id} book={book} isInCart={false} addToCart={addToCart}/>
      ))}
    </ul>
  );
};
  
export default BooksList;