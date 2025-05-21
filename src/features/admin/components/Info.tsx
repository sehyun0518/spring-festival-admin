import { RefreshButton } from '@/components/refresh-button';
import * as S from './Info.styles';
import { useWaitingStore } from '@/stores/useWaitingStore';
import { textZeroFill } from '@/utils/text';

export default function Info() {
  const fetch = useWaitingStore((state) => state.fetchWaitings);
  const waitings = useWaitingStore((state) => state.waitings);
  return (
    <S.Container>
      <S.Text>현재 대기 중 {textZeroFill(String(waitings.length), 2)}팀</S.Text>
      <RefreshButton
        onClick={() => {
          fetch();
        }}
      />
    </S.Container>
  );
}
