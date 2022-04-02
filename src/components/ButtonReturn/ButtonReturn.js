import BtnReturn from './ButtonReturn.styles';
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from 'react';


const ButtonReturn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setVisible(true);

      } else if (window.pageYOffset < 100) {
        setVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReturnButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <BtnReturn visible={visible} onClick={handleReturnButton}>
      <FaArrowUp />
    </BtnReturn>
  )
}

export default ButtonReturn