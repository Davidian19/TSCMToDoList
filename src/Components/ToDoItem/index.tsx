/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles.ts'
function ToDo(props: any) {
    const { title, description, dateTime, onClickButton } = props;
  return (
    <S.Container>

      <S.InfoContainer>
        <S.TitleTask>{title}</S.TitleTask>
        <S.InfoTask>
          <S.Description>{description}</S.Description>
          <span className='date'>{dateTime}</span>
        </S.InfoTask>
      </S.InfoContainer>

      <S.ButtonContainer>
        <S.CloseButton onClick={onClickButton}>X</S.CloseButton>
      </S.ButtonContainer>

    </S.Container>
  )
}

export default ToDo
