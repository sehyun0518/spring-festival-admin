import { RefreshButton } from '@/components/refresh-button';
import * as S from './Info.styles';

export default function Info() {
  return (
    <S.Container>
      <S.Text>현재 대기 중 00팀</S.Text>
      <RefreshButton onClick={() => {}} />
    </S.Container>
  );
}
