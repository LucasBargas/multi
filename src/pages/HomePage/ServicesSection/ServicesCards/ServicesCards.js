import React from 'react';
import * as S from './ServicesCards.styles';
import { BiBasketball, BiTachometer, BiArch } from 'react-icons/bi';
import { IoDocumentTextOutline, IoEarthSharp } from 'react-icons/io5';
import { RiSlideshow3Line } from 'react-icons/ri';

const ServicesCards = () => {
  return (
    <S.ServicesCardsArea>
      <S.ServicesCardsContent>
        <S.ServicesCardsIcon>
          <BiBasketball />
        </S.ServicesCardsIcon>

        <h3>Lorem Ipsum</h3>
        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
      </S.ServicesCardsContent>

      <S.ServicesCardsContent>
        <S.ServicesCardsIcon>
          <IoDocumentTextOutline />
        </S.ServicesCardsIcon>

        <h3>Sed ut perspiciatis</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
      </S.ServicesCardsContent>

      <S.ServicesCardsContent>
        <S.ServicesCardsIcon>
          <BiTachometer />
        </S.ServicesCardsIcon>

        <h3>Magni Dolores</h3>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
      </S.ServicesCardsContent>

      <S.ServicesCardsContent>
        <S.ServicesCardsIcon>
          <IoEarthSharp />
        </S.ServicesCardsIcon>

        <h3>Nemo Enim</h3>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
      </S.ServicesCardsContent>

      <S.ServicesCardsContent>
        <S.ServicesCardsIcon>
          <RiSlideshow3Line />
        </S.ServicesCardsIcon>

        <h3>Dele cardo</h3>
        <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur.</p>
      </S.ServicesCardsContent>

      <S.ServicesCardsContent>
        <S.ServicesCardsIcon>
          <BiArch />
        </S.ServicesCardsIcon>

        <h3>Divera don</h3>
        <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur.</p>
      </S.ServicesCardsContent>
    </S.ServicesCardsArea>
  )
}

export default ServicesCards;
