import { CopyInfo } from '../../../core/models/api-response.model';
import { Paragraph } from '../../elements/Paragraph';
import { Title } from '../../elements/Title';

interface CopyDetailProps {
    copy: CopyInfo;
}

const CopyDetail: React.FC<CopyDetailProps> = ({ copy }) => (
  <li className='copy__container'>
    <Title type='h4' text={`Title: ${copy.title}`} className='copy__subtitle' />
    <Paragraph text={`Author: ${copy.author}`} className={'copy_paragraph'} />
    <Paragraph text={`Price: ${copy.price}`} className={'copy_paragraph'} />
    <Paragraph text={`Increase: ${copy.increase}`} className={'copy_paragraph'} />
    <Paragraph text={`Discount: ${copy.discount}`} className={'copy_paragraph'} />
    <Paragraph text={`Total Price: ${copy.totalPrice}`} className={'copy_paragraph'} />
    <Paragraph text={`Type: ${copy.type}`} className={'copy_paragraph'} />
  </li>
);

export default CopyDetail;