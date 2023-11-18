/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionTitle } from '../SectionTitle.ts';
import * as S from './styles.ts'
function Counter(props: any) {
    const { counter} = props;
  return (
    <S.Container>
        <SectionTitle>Finished tasks quantity</SectionTitle>
        <h1>{counter}</h1>
    </S.Container>
  )
}

export default Counter
