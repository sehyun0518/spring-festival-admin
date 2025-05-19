import { AnimatePresence } from 'framer-motion';
import * as S from './BottomBar.styles';
import DeleteIcon from '@/assets/icons/nrk_trash.svg?react';
import CheckIcon from '@/assets/icons/nrk_check.svg?react';
import useToast from '@/hooks/useToast';
import { useWaitingStore } from '@/stores/useWaitingStore';

export default function BottomBar({
  id,
  setSelectedIndex,
}: {
  id: number;
  setSelectedIndex: () => void;
}) {
  const { open } = useToast();
  const deleteWaiting = useWaitingStore((state) => state.deleteWaiting);

  if (!id) return null;

  const handleClick = async (message: string) => {
    await deleteWaiting(id);
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
            <S.HeaderText>{id}팀</S.HeaderText>
            <S.Text>선택</S.Text>
          </S.TextSection>
          <S.ButtonSection>
            <S.Button
              whileTap={{ scale: 0.97, backgroundColor: '#212526' }}
              onClick={handleClick.bind(null, '노쇼 처리됐어요')}
            >
              <DeleteIcon width={'1.5rem'} height={'1.5rem'} />
              <S.ButtonText>노쇼/삭제</S.ButtonText>
            </S.Button>
            <S.Button
              whileTap={{ scale: 0.97, backgroundColor: '#212526' }}
              onClick={handleClick.bind(null, '입장 완료 처리됐어요')}
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
