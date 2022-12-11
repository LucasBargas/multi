import { useRef, useState } from 'react';
import useInterval from 'use-interval';
import * as S from './InitialSlider.styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slideOne from '../../assets/img/slide/slide-1.jpg';
import slideTwo from '../../assets/img/slide/slide-2.jpg';
import slideThree from '../../assets/img/slide/slide-3.jpg';
import Container from '../../styles/Container';
import Button from '../../components/Button/Button';

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
  },
];

const InitialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [timer, setTimer] = useState(4000);
  const slider = useRef();

  const handleSliderItems = () => {
    const sliderItems = Array.from(slider.current.children);
    sliderItems.pop();
    sliderItems.pop();
    return sliderItems;
  };

  const handleWithTimer = () => {
    setTimeout(() => {
      setTimer(4000);
    }, 4000);
  };

  const handleClickRight = () => {
    const sliderItemsArray = handleSliderItems();
    setTimer(null);
    if (currentSlide < sliderItemsArray.length)
      setCurrentSlide(currentSlide + 1);
    else setCurrentSlide(1);
    handleWithTimer();
  };

  const handleClickLeft = () => {
    const sliderItemsArray = handleSliderItems();
    setTimer(null);
    if (currentSlide === 1) setCurrentSlide(sliderItemsArray.length);
    else setCurrentSlide(currentSlide - 1);
    handleWithTimer();
  };

  useInterval(
    () => {
      handleClickRight();
    },
    timer ? timer : null,
  );

  return (
    <S.SliderContainer ref={slider} id="home">
      {sliderContent.map((content) => (
        <S.SliderBackground
          key={content.id}
          image={content.image}
          currentSlide={currentSlide}
        >
          <Container>
            <S.SliderContent>
              <h2>{content.title}</h2>
              <p>{content.text}</p>
              <Button
                borderColor="#ef6445"
                buttonColor="#ef6445"
                fontColor="#ffffff"
                hoverColor="#fa785c"
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

      <S.DotsButton currentSlide={currentSlide}>
        {sliderContent.map((content) => (
          <span
            key={content.id}
            onClick={() => setCurrentSlide(content.id)}
          ></span>
        ))}
      </S.DotsButton>
    </S.SliderContainer>
  );
};

export default InitialSlider;
