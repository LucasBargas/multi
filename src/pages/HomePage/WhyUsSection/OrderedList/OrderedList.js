import { useEffect, useRef, useState } from 'react';
import * as S from './OrderedList.styles';
import { FiChevronDown } from 'react-icons/fi'

const listContent = [
  {
    number: 1,
    question: 'Non consectetur a erat nam at lectus urna duis?',
    listText: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
  },
  {
    number: 2,
    question: 'Feugiat scelerisque varius morbi enim nunc?',
    listText: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
  },
  {
    number: 3,
    question: 'Dolor sit amet consectetur adipiscing elit?',
    listText: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
  },
];

const OrderedList = () => {
  const [listActive, setListActive] = useState(0);
  const listItems = useRef();

  const handleListItems = () => Array.from(listItems.current.children);

  useEffect(() => {
    const listItemsArray = handleListItems();
    listItemsArray.forEach(list => list.classList.remove('active'));
    listItemsArray[listActive].classList.add('active');
  }, [listActive]);

  useEffect(() => {
    const listItemsArray = handleListItems();
    const handleListLink = index => setListActive(index);
    listItemsArray.forEach((list, index) => list.addEventListener('click', () => handleListLink(index)));
  }, []);

  return (
    <S.ListContainer ref={listItems}>
      {listContent.map(list => (
        <li key={list.number}>
          <S.ListQuestion>
            <div>
              <span>
                {list.number > 9 ? list.number : `0${list.number}`}
              </span>
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
  )
}

export default OrderedList;
