import useModal from '@/hooks/useModal';
import * as S from './WaitingButton.styles';
import PlusIcon from '@/assets/icons/plus.svg?react';
import WaitingModal from '@/features/admin/components/waiting/WaitingModal';

export default function WaitingButton() {
  const { open } = useModal(WaitingModal);
  return (
    <S.Container whileTap={{ scale: 0.97 }} onClick={() => open({ title: '현장 웨이팅 추가하기' })}>
      <S.Wrapper>
        <S.InnerButton>
          <PlusIcon fill="#FAFAFA" />
        </S.InnerButton>
        <S.Text>현장 웨이팅 추가하기</S.Text>
      </S.Wrapper>
    </S.Container>
  );
}
