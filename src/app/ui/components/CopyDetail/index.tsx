import { CopyInfo } from '../../../core/models/api-response.model';
import { Paragraph } from '../../elements/Paragraph';
import { Title } from '../../elements/Title';

interface CopyDetailProps {
    copy: CopyInfo;
}

const CopyDetail: React.FC<CopyDetailProps> = ({ copy }) => (
  <li>
    <Title type='h4' text={`Title: ${copy.title}`} className='calculate__subtitle' />
    <Paragraph text={`Author: ${copy.author}`} className={'calculate__paragraph'} />
    <Paragraph text={`Price: ${copy.price}`} className={'calculate__paragraph'} />
    <Paragraph text={`Increase: ${copy.increase}`} className={'calculate__paragraph'} />
    <Paragraph text={`Discount: ${copy.discount}`} className={'calculate__paragraph'} />
    <Paragraph text={`Total Price: ${copy.totalPrice}`} className={'calculate__paragraph'} />
    <Paragraph text={`Type: ${copy.type}`} className={'calculate__paragraph'} />
  </li>
);

export default CopyDetail;