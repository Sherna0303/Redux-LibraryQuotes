import { BookItem } from '../BookItem';
import { Copy } from '../../../core/models/copy.model';

interface BooksListProps {
    books: Copy[];
  }
  
const BooksList: React.FC<BooksListProps> = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.id} book={book} isInCart={false} />
      ))}
    </ul>
  );
};
  
export default BooksList;