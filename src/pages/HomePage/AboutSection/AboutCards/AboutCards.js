import * as S from './AboutCards.styles';
import { BsEmojiSmile, BsPeople } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaHeadphonesAlt } from "react-icons/fa";

const cardsDatas = [
  {
    icon: <BsEmojiSmile />,
    number: '232',
    strongText: 'Happy Clients',
    text: 'consequuntur quae qui deca rode.',
    link: 'Find out more »'
  },
  {
    icon: <CgNotes />,
    number: '521',
    strongText: 'Projects',
    text: 'adipisci atque cum quia aut numquam delectus.',
    link: 'Find out more »'
  },
  {
    icon: <FaHeadphonesAlt />,
    number: '1.463',
    strongText: 'Hours Of Support',
    text: 'aut commodi quaerat. Aliquam ratione.',
    link: 'Find out more »'
  },
  {
    icon: <BsPeople />,
    number: '15',
    strongText: 'Hard Workers',
    text: 'rerum asperiores dolor molestiae doloribu.',
    link: 'Find out more »'
  }
];

const AboutCards = () => {
  return (
    <S.AboutCardsContainer>
      {cardsDatas.map(card => (
        <S.Card key={card.number}>
          <div>
            {card.icon}
            <span>{card.number}</span>
          </div>
          <p><strong>{card.strongText}</strong> {card.text}</p>
          <a href="/">{card.link}</a>
        </S.Card>
      ))}
    </S.AboutCardsContainer>
  )
}

export default AboutCards;