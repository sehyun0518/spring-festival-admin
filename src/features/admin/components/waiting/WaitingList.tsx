import { WaitingType } from '@/types/waiting.type';
import * as S from './WaitingList.styles';
import { AlarmButton, CallButton } from '@/components/button';
import { useState, Fragment, useRef, useEffect } from 'react';
import BottomBar from '@/features/admin/components/waiting/BottomBar';
import { useWaitingStore } from '@/stores/useWaitingStore';

export default function WaitingList() {
  const waitings = useWaitingStore((state) => state.waitings);
  return (
    <S.Container>
      {waitings.map((waiting, index) => {
        return (
          <Fragment key={waiting.waitingNum}>
            <WaitingListItem key={waiting.waitingNum} waiting={waiting} />
            {index != 1 && index != waitings.length - 1 && <S.HorizontalLine />}
            {index === 1 && <S.BorderLine />}
          </Fragment>
        );
      })}
      <S.BottomPadding />
    </S.Container>
  );
}

function WaitingListItem({ waiting }: { waiting: WaitingType }) {
  const [cliked, setCliked] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cliked) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(e.target as Node)) {
        setCliked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [cliked]);
  return (
    <S.ListItemContainer onClick={() => setCliked((prev) => !prev)} ref={itemRef}>
      <S.ListItem $isSelect={cliked} whileTap={{ scale: 0.97 }}>
        <S.TextSection>
          <S.TextFrame $gap="0.12rem">
            <S.TextFrame $gap="0.12rem">
              <S.HeaderText $isBold {...(cliked ? { $isBlue: true } : {})}>
                {waiting.id}
              </S.HeaderText>
              <S.HeaderText {...(cliked ? { $isBlue: true } : { $isGray: true })}>님</S.HeaderText>
            </S.TextFrame>
            <S.HeaderText {...(cliked ? { $isBlue: true } : { $isGray: true })}>
              ({waiting.phoneNumber})
            </S.HeaderText>
          </S.TextFrame>
          <S.TextFrame $gap="0.13rem">
            <S.Text $isBold>{waiting.visitorCount}명 / 35분</S.Text>
            <S.Text>대기 중</S.Text>
          </S.TextFrame>
        </S.TextSection>
        <S.ButtonSection>
          <AlarmButton
            id={waiting.id}
            isStopPropagation={cliked}
            disabled={waiting.type === 'WalkIn'}
          />
          <CallButton tel={waiting.phoneNumber} isStopPropagation={cliked} />
        </S.ButtonSection>
      </S.ListItem>
      {cliked && (
        <BottomBar
          id={waiting.id}
          type={waiting.type}
          setSelectedIndex={() => setCliked(false)}
          waitingNum={waiting.waitingNum}
        />
      )}
    </S.ListItemContainer>
  );
}
