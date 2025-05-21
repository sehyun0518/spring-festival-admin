import { AnimatePresence } from 'framer-motion';
import * as S from './BottomBar.styles';
import DeleteIcon from '@/assets/icons/nrk_trash.svg?react';
import CheckIcon from '@/assets/icons/nrk_check.svg?react';
import useToast from '@/hooks/useToast';
import { useWaitingStore } from '@/stores/useWaitingStore';
import { completeWaiting, noShowWaiting } from '@/features/admin/services/waiting';
import { textZeroFill } from '@/utils/text';
export default function BottomBar({
  id,
  type,
  waitingNum,
  setSelectedIndex,
}: {
  id: number;
  type: string;
  waitingNum: number;
  setSelectedIndex: () => void;
}) {
  const { open } = useToast();
  const deleteWaiting = useWaitingStore((state) => state.deleteWaiting);

  if (!id) return null;

  const handleNoShow = async (message: string) => {
    await deleteWaiting(waitingNum);
    await noShowWaiting(id, type);
    open(message, 3000, 'bootom-bar' + id);
    setSelectedIndex();
  };
  const handleComplete = async (message: string) => {
    await deleteWaiting(waitingNum);
    await completeWaiting(id, type);
    open(message, 3000, 'bootom-bar' + id);
    setSelectedIndex();
  };
  return (
    <AnimatePresence>
      {id && (
        <S.Container
          key="bottom-bar"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          variants={S.variants}
        >
          <S.TextSection>
            <S.HeaderText>{textZeroFill(String(waitingNum), 4)}님</S.HeaderText>
            <S.Text>선택</S.Text>
          </S.TextSection>
          <S.ButtonSection>
            <S.Button
              whileTap={{ scale: 0.97, backgroundColor: '#212526' }}
              onClick={handleNoShow.bind(null, '노쇼/삭제 처리가 완료됐어요')}
            >
              <DeleteIcon width={'1.5rem'} height={'1.5rem'} />
              <S.ButtonText>노쇼/삭제</S.ButtonText>
            </S.Button>
            <S.Button
              whileTap={{ scale: 0.97, backgroundColor: '#212526' }}
              onClick={handleComplete.bind(null, '입장 완료 처리가 완료됐어요')}
            >
              <CheckIcon width={'1.5rem'} height={'1.5rem'} />
              <S.ButtonText>입장 완료</S.ButtonText>
            </S.Button>
          </S.ButtonSection>
        </S.Container>
      )}
    </AnimatePresence>
  );
}
