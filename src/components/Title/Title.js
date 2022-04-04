import TitleContainer from "./Title.styles";

const Title = ({ children, subTitle }) => {
  return (
    <TitleContainer>
      <h3>{subTitle}</h3>
      <h2>{children}</h2>
    </TitleContainer>
  )
}

export default Title;