import { postAlarm } from '@/features/admin/services/waiting';
import * as S from './AlarmModal.styles';
import useToast from '@/hooks/useToast';
import { useAuthStore } from '@/features/login/stores/useAuthStore';

export default function AlarmModal({ closeModal }: { closeModal: () => void }) {
  const { open } = useToast();
  const id = useAuthStore((state) => state.userId);
  const handleClick = async () => {
    try {
      await postAlarm(id);
      open('입장 알림을 전송했어요', 3000, 'alarm');
    } catch {
      await closeModal();
      open('입장 알림 전송에 실패했어요', 3000, 'alarm-error');
    }
    closeModal();
  };
  return (
    <S.Container>
      <S.Text>정말 입장 알림을 보내실 건가요?</S.Text>
      <S.Button onClick={handleClick} whileTap={{ scale: 0.97 }}>
        알림 보내기
      </S.Button>
    </S.Container>
  );
}
