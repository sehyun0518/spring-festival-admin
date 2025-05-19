import { RefreshButton } from '@/components/refresh-button';
import * as S from './Info.styles';
import { useWaitingStore } from '@/stores/useWaitingStore';

export default function Info() {
  const fetch = useWaitingStore((state) => state.fetchWaitings);
  return (
    <S.Container>
      <S.Text>현재 대기 중 00팀</S.Text>
      <RefreshButton
        onClick={() => {
          fetch();
        }}
      />
    </S.Container>
  );
}
