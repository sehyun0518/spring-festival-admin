import { AnimatePresence } from 'framer-motion';
import * as S from './BottomBar.styles';
import DeleteIcon from '@/assets/icons/nrk_trash.svg?react';
import CheckIcon from '@/assets/icons/nrk_check.svg?react';
import useToast from '@/hooks/useToast';
import { useWaitingStore } from '@/stores/useWaitingStore';
import { completeWaiting, noShowWaiting } from '@/features/admin/services/waiting';
import { textZeroFill } from '@/utils/text';

export default function BottomBar({
  openItems,
  setOpenItems,
}: {
  openItems: Map<number, number>;
  setOpenItems: (next: Map<number, number>) => void;
}) {
  const { open } = useToast();
  const deleteWaiting = useWaitingStore((state) => state.deleteWaiting);
  const selectedEntries = [...openItems.entries()];

  if (selectedEntries.length === 0) return null;
  const handleBulkAction = async (type: 'complete' | 'noShow') => {
    for (const [id, waitingNum] of selectedEntries) {
      try {
        const api = type === 'complete' ? completeWaiting : noShowWaiting;
        const response = await api(id, 'WalkIn');
        if (response.status === 200) {
          await deleteWaiting(waitingNum);
        }
      } catch {
        open(`${textZeroFill(String(waitingNum), 4)} 처리 실패`, 3000, `bottom-bar-error-${id}`);
      }
    }
    const text =
      type === 'complete' ? '입장 완료 처리가 완료됐어요' : '노쇼/삭제 처리가 완료됐어요';
    open(text, 3000, `bottom-bar-${type}`);
    setOpenItems(new Map());
  };

  return (
    <AnimatePresence>
      <S.Container
        key="bottom-bar"
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        variants={S.variants}
      >
        <S.TextSection>
          <S.HeaderText>{textZeroFill(String(selectedEntries.length), 4)}명</S.HeaderText>
          <S.Text>선택</S.Text>
        </S.TextSection>
        <S.ButtonSection>
          <S.Button whileTap={{ scale: 0.97 }} onClick={() => handleBulkAction('noShow')}>
            <DeleteIcon width={'1.5rem'} height={'1.5rem'} />
            <S.ButtonText>삭제</S.ButtonText>
          </S.Button>
          <S.Button whileTap={{ scale: 0.97 }} onClick={() => handleBulkAction('complete')}>
            <CheckIcon width={'1.5rem'} height={'1.5rem'} />
            <S.ButtonText>입장 완료</S.ButtonText>
          </S.Button>
        </S.ButtonSection>
      </S.Container>
    </AnimatePresence>
  );
}
