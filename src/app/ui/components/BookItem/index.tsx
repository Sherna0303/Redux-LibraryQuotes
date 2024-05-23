import { Copy } from '../../../core/models/copy.model';
import { Button } from '../../elements/Button';
import { Paragraph } from '../../elements/Paragraph';
import { Span } from '../../elements/Span';
import { Title } from '../../elements/Title';

interface CopyProps {
    book: Copy;
    isInCart: boolean;
    addToCart: (copy: Copy) => void;
  }
  
export const BookItem: React.FC<CopyProps> = ({ book, isInCart, addToCart }) => {
  
  const imageUrls = [
    'https://imagessl9.casadellibro.com/a/l/s5/29/9788416628629.webp',
  ];
  
  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };
  
  return (
    <div className={`book ${isInCart ? 'book__container book--in-cart' : 'book__container'}`}>
      <img className='book__img' src={getRandomImageUrl()} />
      <Title className='book__title' text={book.title} type='h2'/>
      <div className="book__detail-container">
        <Span className='book__detail' text='Author:'/>
        <Paragraph className='book__item' text={book.author}/>
      </div>
      <div className="book__detail-container">
        <Span className='book__detail' text='Price:'/>
        <Paragraph className='book__item' text={book.price.toFixed(2)}/>
      </div>
      <div className="book__detail-container">
        <Span className='book__detail' text='Type:'/>
        <Paragraph className='book__item' text={book.type}/>
      </div>
      <Button className='book__button' text={isInCart ? 'Added' : 'Add to Cart'} onClick={() => addToCart(book)} />
    </div>
  );
};