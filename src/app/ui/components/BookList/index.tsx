import { BookItem } from '../BookItem';
import { Copy } from '../../../core/models/copy.model';

interface BooksListProps {
    books: Copy[];
    addToCart: (copy: Copy) => void;
  }
  
const BooksList: React.FC<BooksListProps> = ({ books, addToCart }) => {
  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.id} book={book} isInCart={false} addToCart={addToCart}/>
      ))}
    </ul>
  );
};
  
export default BooksList;