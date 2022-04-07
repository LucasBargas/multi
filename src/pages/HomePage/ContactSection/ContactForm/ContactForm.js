import * as S from './ContactForm.styles';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState(null);

  return (
    <S.ContactFormContainer>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder='Your Name' />
        <input type="text" placeholder='Your Email' />
        <input type="text" placeholder='Subject' />
        <textarea rows="5" placeholder='Message' />

        {message && (
          <S.AlertMsg>
            <p>Este formulário não pode executar o envio, pois o mesmo é apenas demonstrativo.</p>
            <button onClick={() => setMessage(null)}>
              <IoCloseSharp />
            </button>
          </S.AlertMsg>
        )}

        <S.SendForm>
          <S.ButtonForm
            borderColor='#ed502e'
            buttonColor='#ed502e'
            fontColor='#ffffff'
            hoverColor='#fa785c'
            onClick={() => setMessage(true)}
          >
            Send Message
          </S.ButtonForm>
        </S.SendForm>
      </form>
    </S.ContactFormContainer>
  )
}

export default ContactForm;
