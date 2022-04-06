import * as S from './FaqList.styles';
import { BiHelpCircle } from 'react-icons/bi';

const FaqList = () => {
  return (
    <S.FaqListArea>
      <li>
        <S.FaqAsk>
          <S.FaqIcon>
            {<BiHelpCircle />}
          </S.FaqIcon>
          <span>Non consectetur a erat nam at lectus urna duis?</span>
        </S.FaqAsk>

        <S.FaqAnswer>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</S.FaqAnswer>
      </li>

      <li>
        <S.FaqAsk>
          <S.FaqIcon>
            {<BiHelpCircle />}
          </S.FaqIcon>
          <span>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span>
        </S.FaqAsk>

        <S.FaqAnswer>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.</S.FaqAnswer>
      </li>

      <li>
        <S.FaqAsk>
          <S.FaqIcon>
            {<BiHelpCircle />}
          </S.FaqIcon>
          <span>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</span>
        </S.FaqAsk>

        <S.FaqAnswer>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.</S.FaqAnswer>
      </li>

      <li>
        <S.FaqAsk>
          <S.FaqIcon>
            {<BiHelpCircle />}
          </S.FaqIcon>
          <span>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</span>
        </S.FaqAsk>

        <S.FaqAnswer>Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.</S.FaqAnswer>
      </li>

      <li>
        <S.FaqAsk>
          <S.FaqIcon>
            {<BiHelpCircle />}
          </S.FaqIcon>
          <span>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</span>
        </S.FaqAsk>

        <S.FaqAnswer>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</S.FaqAnswer>
      </li>
    </S.FaqListArea>
  )
}

export default FaqList