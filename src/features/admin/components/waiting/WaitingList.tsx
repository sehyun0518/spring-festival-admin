import { WaitingType } from '@/types/waiting.type';
import * as S from './WaitingList.styles';
import { CallButton } from '@/components/button';
import { useState, Fragment } from 'react';
import BottomBar from '@/features/admin/components/waiting/BottomBar';
import { useWaitingStore } from '@/stores/useWaitingStore';
import { textZeroFill } from '@/utils/text';
import { getMinuteDiff } from '@/utils/day';
export default function WaitingList() {
  const waitings = useWaitingStore((state) => state.waitings);
  const [openItems, setOpenItems] = useState<Map<number, number>>(new Map());

  const toggleOpen = (id: number, waitingNum: number) => {
    setOpenItems((prev) => {
      const newMap = new Map(prev);
      if (newMap.has(id)) newMap.delete(id);
      else newMap.set(id, waitingNum);
      return newMap;
    });
  };

  return (
    <S.Container>
      {waitings.map((waiting, index) => (
        <Fragment key={waiting.id}>
          <WaitingListItem
            waiting={waiting}
            isOpen={openItems.has(waiting.id)}
            toggleOpen={() => toggleOpen(waiting.id, waiting.waitingNum)}
          />
          {index !== 1 && index !== waitings.length - 1 && <S.HorizontalLine />}
        </Fragment>
      ))}
      <S.BottomPadding />
      <BottomBar openItems={openItems} setOpenItems={setOpenItems} />
    </S.Container>
  );
}

function WaitingListItem({
  waiting,
  isOpen,
  toggleOpen,
}: {
  waiting: WaitingType;
  isOpen: boolean;
  toggleOpen: (waitingId: number) => void;
}) {
  return (
    <S.ListItemContainer onClick={() => toggleOpen(waiting.id)}>
      <S.ListItem $isSelect={isOpen} whileTap={{ scale: 0.97 }}>
        <S.TextSection>
          <S.TextFrame $gap="0.12rem">
            <S.TextFrame $gap="0.12rem">
              <S.HeaderText $isBold {...(isOpen ? { $isBlue: true } : {})}>
                {textZeroFill(String(waiting.waitingNum), 4)}
              </S.HeaderText>
              <S.HeaderText {...(isOpen ? { $isBlue: true } : { $isGray: true })}>님</S.HeaderText>
            </S.TextFrame>
            <S.HeaderText {...(isOpen ? { $isBlue: true } : { $isGray: true })}>
              ({waiting.phoneNumber.slice(-4)})
            </S.HeaderText>
          </S.TextFrame>
          <S.TextFrame $gap="0.13rem">
            <S.Text $isBold>
              {waiting.visitorCount}명 / {getMinuteDiff(waiting.createdAt, new Date())}분
            </S.Text>
            <S.Text>대기 중</S.Text>
          </S.TextFrame>
        </S.TextSection>
        <S.ButtonSection>
          <CallButton
            tel={waiting.phoneNumber}
            isStopPropagation={isOpen}
            num={textZeroFill(String(waiting.waitingNum), 4)}
          />
        </S.ButtonSection>
      </S.ListItem>
    </S.ListItemContainer>
  );
}
