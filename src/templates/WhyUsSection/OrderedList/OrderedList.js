import { useEffect, useRef, useState } from 'react';
import * as S from './OrderedList.styles';
import { FiChevronDown } from 'react-icons/fi';

const listContent = [
  {
    id: 1,
    question: 'Non consectetur a erat nam at lectus urna duis?',
    listText:
      'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
  {
    id: 2,
    question: 'Feugiat scelerisque varius morbi enim nunc?',
    listText:
      'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
  {
    id: 3,
    question: 'Dolor sit amet consectetur adipiscing elit?',
    listText:
      'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
];

const OrderedList = () => {
  const [listActive, setListActive] = useState([1]);

  const handleClick = (id) => {
    if (listActive.includes(id)) {
      setListActive(listActive.filter((listId) => listId !== id));
      return;
    }

    setListActive([...listActive, id]);
  };

  return (
    <S.ListContainer>
      {listContent.map((list) => (
        <li
          key={list.id}
          className={listActive.includes(list.id) ? 'active' : ''}
        >
          <S.ListQuestion onClick={() => handleClick(list.id)}>
            <div>
              <span>0{list.id}</span>
              <span>{list.question}</span>
            </div>
            <FiChevronDown />
          </S.ListQuestion>

          <S.ListText>
            <p>{list.listText}</p>
          </S.ListText>
        </li>
      ))}
    </S.ListContainer>
  );
};

export default OrderedList;
