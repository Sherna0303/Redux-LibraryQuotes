import { Copy } from '../../../core/models/copy.model';
import { Button } from '../../elements/Button';
import { Paragraph } from '../../elements/Paragraph';
import { Span } from '../../elements/Span';
import { Title } from '../../elements/Title';

interface CopyProps {
    book: Copy;
    isInCart: boolean;
  }
  
export const BookItem: React.FC<CopyProps> = ({ book, isInCart }) => {
  
  const imageUrls = [
    'https://imagessl9.casadellibro.com/a/l/s5/29/9788416628629.webp',
    'https://imagessl8.casadellibro.com/a/l/s5/18/9788408169918.webp',
    'https://imagessl8.casadellibro.com/a/l/s5/08/9788401343308.webp',
    'https://imagessl5.casadellibro.com/a/l/s5/05/9788467037005.webp',
    'https://imagessl5.casadellibro.com/a/l/s5/05/9788483658505.webp',
    'https://imagessl6.casadellibro.com/a/l/s5/36/9788408125136.webp',
    'https://imagessl2.casadellibro.com/a/l/s5/02/cdlet00000002.webp',
    'https://imagessl6.casadellibro.com/a/l/s5/06/9788408123606.webp'
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
      <Button className='book__button' text={isInCart ? 'Added' : 'Add to Cart'} />
    </div>
  );
};