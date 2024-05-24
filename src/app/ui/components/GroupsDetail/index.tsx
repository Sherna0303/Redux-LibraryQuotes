import { GroupInfo } from '../../../core/models/api-response.model';
import { Paragraph } from '../../elements/Paragraph';
import { Title } from '../../elements/Title';
import CopyDetail from '../CopyDetail';
import './style.css';

interface GroupsProps {
    group: GroupInfo;
    index: number;
}

const Groups: React.FC<GroupsProps> = ({ group, index }) => (
  <div key={index} className='group__container'>
    <Title type='h3' text={`Bag #${index + 1}`} className='group__subtitle' />
    <Paragraph text={`Seniority: ${group.seniority}`} className={'group__paragraph'} />
    <Paragraph text={`Total: ${group.total.toFixed(2)}`} className={'group__paragraph'} />
    <Paragraph text={`Total Discount: ${group.totalDiscount.toFixed(2)}`} className={'group__paragraph'} />
    <Paragraph text={`Total Increase: ${group.totalIncrease.toFixed(2)}`} className={'group__paragraph'} />
    <ul className='group__copies'>
      {group.copies.map((copy, copyIndex) => (
        <CopyDetail key={copyIndex} copy={copy} />
      ))}
    </ul>
  </div>
);

export default Groups;