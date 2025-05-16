import { WaitingType } from '@/features/admin/type/waiting.type';
import * as S from './WaitingList.styles';
import { AlarmButton, CallButton } from '@/components/button';
import { useState, Fragment } from 'react';
import BottomBar from '@/features/admin/components/waiting/BottomBar';

const waitings: WaitingType[] = [
  {
    id: 1,
    name: 'John Doe',
    phone: '123-456-7890',
    status: {
      people: 5,
      time: '10:00 AM',
    },
    isAlert: false,
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '987-654-3210',
    status: {
      people: 3,
      time: '10:15 AM',
    },
    isAlert: false,
  },
  {
    id: 3,
    name: 'Jane Smith',
    phone: '987-654-3210',
    status: {
      people: 3,
      time: '10:15 AM',
    },
    isAlert: false,
  },
  {
    id: 4,
    name: 'Jane Smith',
    phone: '987-654-3210',
    status: {
      people: 3,
      time: '10:15 AM',
    },
    isAlert: false,
  },
  {
    id: 5,
    name: 'Jane Smith',
    phone: '987-654-3210',
    status: {
      people: 3,
      time: '10:15 AM',
    },
    isAlert: false,
  },
];

export default function WaitingList() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <S.Container>
      {waitings.map((waiting, index) => {
        return (
          <Fragment key={waiting.id}>
            <WaitingListItem
              key={waiting.id}
              waiting={waiting}
              isSelect={selectedIndex === index}
              onClick={() => setSelectedIndex((prev) => (prev === index ? null : index))}
            />
            {index != 1 && index != waitings.length - 1 && <S.HorizontalLine />}
            {index === 1 && <S.BorderLine />}
          </Fragment>
        );
      })}
      <S.BottomPadding />
      {selectedIndex != null && (
        <BottomBar id={selectedIndex} setSelectedIndex={() => setSelectedIndex(null)} />
      )}
    </S.Container>
  );
}

function WaitingListItem({
  waiting,
  isSelect = false,
  onClick = () => {},
}: {
  waiting: WaitingType;
  isSelect: boolean;
  onClick: () => void;
}) {
  return (
    <S.ListItemContainer>
      <S.ListItem onClick={onClick} $isSelect={isSelect} whileTap={{ scale: 0.97 }}>
        <S.TextSection>
          <S.TextFrame $gap="0.12rem">
            <S.TextFrame $gap="0.12rem">
              <S.HeaderText $isBold {...(isSelect ? { $isBlue: true } : {})}>
                000{waiting.id}
              </S.HeaderText>
              <S.HeaderText {...(isSelect ? { $isBlue: true } : { $isGray: true })}>
                님
              </S.HeaderText>
            </S.TextFrame>
            <S.HeaderText {...(isSelect ? { $isBlue: true } : { $isGray: true })}>
              ({waiting.phone.slice(-4)})
            </S.HeaderText>
          </S.TextFrame>
          <S.TextFrame $gap="0.13rem">
            <S.Text $isBold>{waiting.status.people}명 / 35분</S.Text>
            <S.Text>대기 중</S.Text>
          </S.TextFrame>
        </S.TextSection>
        <S.ButtonSection>
          <AlarmButton id={waiting.id} isStopPropagation={isSelect} />
          <CallButton tel={waiting.phone} isStopPropagation={isSelect} />
        </S.ButtonSection>
      </S.ListItem>
    </S.ListItemContainer>
  );
}
