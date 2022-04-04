import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as S from './InitialSlider.styles';
import slideOne from '../../../assets/img/slide/slide-1.jpg';
import slideTwo from '../../../assets/img/slide/slide-2.jpg';
import slideThree from '../../../assets/img/slide/slide-3.jpg';
import Container from '../../../styles/Container';
import Button from '../../../components/Button/Button';

const sliderContent = [
  {
    id: 1,
    image: slideOne,
    title: 'Welcome to Multi',
    text: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
  {
    id: 2,
    image: slideTwo,
    title: 'Lorem Ipsum Dolor',
    text: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
  {
    id: 3,
    image: slideThree,
    title: 'Sequi ea ut et est quaerat',
    text: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  }
];

const InitialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef();
  const dots = useRef();
  const active = 'active';

  const handleSliderItems = () => {
    const sliderItems = Array.from(slider.current.children);
    sliderItems.pop();
    sliderItems.pop();
    return sliderItems;
  }

  useEffect(() => {
    const sliderItemsArray = handleSliderItems();
    sliderItemsArray.forEach(el => el.classList.remove(active));
    sliderItemsArray[currentSlide].classList.add(active);
  }, [currentSlide]);


  const handleClickRight = () => {
    const sliderItemsArray = handleSliderItems();
    if (currentSlide < sliderItemsArray.length - 1) setCurrentSlide(currentSlide + 1);
    else setCurrentSlide(0);
  }

  const handleClickLeft = () => {
    const sliderItemsArray = handleSliderItems();
    if (currentSlide === 0) setCurrentSlide(sliderItemsArray.length - 1);
    else setCurrentSlide(currentSlide - 1);
  }

  useEffect(() => {
    const dotsArray = Array.from(dots.current.children);
    const handleDotClick = (index) => setCurrentSlide(index);

    dotsArray.forEach((dot, index) => {
      dot.classList.remove(active);
      dot.addEventListener('click', () => handleDotClick(index));
    })

    dotsArray[currentSlide].classList.add(active);
  }, [currentSlide]);

  return (
    <S.SliderContainer ref={slider}>
      {sliderContent.map(content => (
        <S.SliderBackground key={content.id} image={content.image}>
          <Container>
            <S.SliderContent>
              <h2>{content.title}</h2>
              <p>{content.text}</p>
              <Button 
                borderColor='#ef6445' 
                buttonColor='#ef6445' 
                fontColor='#ffffff'
                hoverColor='#fa785c' 
              >
                Read More
              </Button>
            </S.SliderContent>
          </Container>
        </S.SliderBackground>
      ))}
      <S.ArrowButtons>
        <button onClick={handleClickLeft}>
          <FaChevronLeft />
        </button>
        <button onClick={handleClickRight}>
          <FaChevronRight />
        </button>
      </S.ArrowButtons>

      <S.DotsButton ref={dots}>
        {sliderContent.map(content => (
          <span key={content.id}></span>
        ))}
      </S.DotsButton>
    </S.SliderContainer>
  )
}

export default InitialSlider;
