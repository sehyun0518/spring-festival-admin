import * as S from './AlarmModal.styles';

export default function AlarmModal({ id, closeModal }: { id: number; closeModal: () => void }) {
  console.log(id);
  return (
    <S.Container>
      <S.Text>정말 입장 알림을 보내실 건가요?</S.Text>
      <S.Button onClick={closeModal} whileTap={{ scale: 0.97 }}>
        알림 보내기
      </S.Button>
    </S.Container>
  );
}
