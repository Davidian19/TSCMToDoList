/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles.ts'
function ToDo(props: any) {
    const { title, description, dateTime, onClickButton } = props;
  return (
    <S.Container>

      <S.LeftInfo>
        <S.LeftTitle>{title}</S.LeftTitle>
        <S.LeftDescription>{description}</S.LeftDescription>
      </S.LeftInfo>

      <S.RightInfo>
        <S.CloseButton onClick={onClickButton}>X</S.CloseButton>
        <span>{dateTime}</span>
      </S.RightInfo>

    </S.Container>
  )
}

export default ToDo
