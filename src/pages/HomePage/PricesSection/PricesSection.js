import React from 'react';
import * as S from './PricesSection.styles';
import { BsCheck } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';
import Container from '../../../styles/Container';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button/Button';

const PricesSection = () => {
  return (
    <S.PricesContainer>
      <Container>
        <Title subTitle='Pricing'>Our Competing Prices</Title>
        <S.PricesArea>
          <S.PricesContent>
            <div>
              <h3>Free</h3>
              <h4>$0<span>per month</span></h4>
            </div>
            <ul>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Quam adipiscing vitae proin
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Nec feugiat nisl pretium
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Nulla at volutpat diam uteera
              </li>
              <li>
                <span style={{ color: '#999999' }}><IoIosClose /></span>
                <span style={{ textDecoration: 'line-through' }}>Pharetra massa massa ultricies</span>
              </li>
              <li>
                <span style={{ color: '#999999' }}><IoIosClose /></span>
                <span style={{ textDecoration: 'line-through' }}>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>

            <S.PricesContentBtn>
              <Button
                borderColor='#0b2341'
                buttonColor='#ffffff'
                fontColor='#0b2341'
                hoverColor='#0b2341'
              >
                Get Started
              </Button>
            </S.PricesContentBtn>
          </S.PricesContent>

          <S.PricesContent>
            <div>
              <h3>Business</h3>
              <h4>$29<span>per month</span></h4>
            </div>
            <ul>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Quam adipiscing vitae proin
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Nec feugiat nisl pretium
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Nulla at volutpat diam uteera
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Pharetra massa massa ultricies
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Massa ultricies mi quis hendrerit
              </li>
            </ul>

            <S.PricesContentBtn>
              <Button
                borderColor='#ed502e'
                buttonColor='#ed502e'
                fontColor='#ffffff'
                hoverColor='#fa785c'
              >
                Get Started
              </Button>
            </S.PricesContentBtn>
          </S.PricesContent>

          <S.PricesContent>
            <div>
              <h3>Developer</h3>
              <h4>$49<span>per month</span></h4>
            </div>
            <ul>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Quam adipiscing vitae proin
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Nec feugiat nisl pretium
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Nulla at volutpat diam uteera
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Pharetra massa massa ultricies
              </li>
              <li>
                <span style={{ color: '#ed502e' }}><BsCheck /></span>
                Massa ultricies mi quis hendrerit
              </li>
            </ul>

            <S.PricesContentBtn>
              <Button
                borderColor='#0b2341'
                buttonColor='#ffffff'
                fontColor='#0b2341'
                hoverColor='#0b2341'
              >
                Get Started
              </Button>
            </S.PricesContentBtn>
          </S.PricesContent>
        </S.PricesArea>
      </Container>
    </S.PricesContainer>
  )
}

export default PricesSection;
