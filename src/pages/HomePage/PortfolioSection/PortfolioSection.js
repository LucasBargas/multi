import { useRef, useState } from 'react';
import * as S from './PortfolioSection.styles';
import { BiLink } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import products from './products';
import Title from '../../../components/Title/Title';
import Container from '../../../styles/Container';

const PortfolioSection = () => {
  const link = useRef();
  const [itemFilter, setItemFilter] = useState('all');

  const handleClick = ({ target }) => {
    const linkArray = Array.from(link.current.children);
    linkArray.forEach(link => link.classList.remove('active'));
    target.classList.add('active');
    setItemFilter(target.innerText.toLowerCase());
  }

  return (
    <S.PortfolioContainer id='portfolio'>
      <Container>
        <Title subTitle='Portfolio'>Check Our Portfolio</Title>
        <S.NavContainer>
          <ul ref={link}>
            <li onClick={handleClick} className='active'>All</li>
            <li onClick={handleClick}>App</li>
            <li onClick={handleClick}>Card</li>
            <li onClick={handleClick}>Web</li>
          </ul>
        </S.NavContainer>
        <S.PortofioArea>
          {
            products.filter(productFilter => (
              productFilter.defaultCategory === itemFilter || productFilter.category === itemFilter
            ))
            .map(productMap => (
              <figure key={productMap.title}>
                <img src={productMap.src} alt={productMap.title} />
                <S.ProductContent>
                  <div>
                    <section>
                      <h3>{productMap.name}</h3>
                      <span style={{ textTransform: 'capitalize' }}>{productMap.category}</span>
                    </section>
                    <section>
                      <a href='/'><AiOutlinePlus /></a>
                      <a href='/'><BiLink /></a>
                    </section>
                  </div>
                </S.ProductContent>
              </figure>
            ))
          }
        </S.PortofioArea>
      </Container>
    </S.PortfolioContainer>
  )
}

export default PortfolioSection;
