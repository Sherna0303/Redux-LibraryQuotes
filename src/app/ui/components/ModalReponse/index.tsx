import { useCalculate } from '../../../core/hooks/useCalculate';
import { Title } from '../../elements/Title';
import Groups from '../GroupsDetail';
import Modal from '../Modal';

export const ModalReponse = () => {
  const { apiResponse, showModal, handleCloseModal } = useCalculate();
  return (
    <>
      {showModal && apiResponse && (
        <Modal onClose={handleCloseModal}>
          {apiResponse.groups.map((group, index) => (
            <Groups key={index} group={group} index={index} />
          ))}

          <Title type='h2' text={`Total Groups: ${apiResponse.totalGroups}`} className='calculate__title' />
          <Title type='h2' text={`Total Discount Groups: ${apiResponse.totalDiscountGroups}`} className='calculate__title' />
          <Title type='h2' text={`Total Increase Groups: ${apiResponse.totalIncreaseGroups}`} className='calculate__title' />
        </Modal>
      )}
    </>
  );
};