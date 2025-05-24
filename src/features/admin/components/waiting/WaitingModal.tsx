import { InputStepper } from '@/components/input-stepper';
import { useFunnel } from '@/hooks/useFunnel';
import { useEffect, useState } from 'react';
import { useModalStore } from '@/stores/useModalStore';
import * as S from './WaitingModal.styles';
import { useSearchParams } from 'react-router-dom';
import { useWaitingStore } from '@/stores/useWaitingStore';
import { postWaiting } from '@/features/admin/services/waiting';

const STEPS = ['people', 'phone', 'complete'] as const;

type WaitingForm = {
  people: number;
  phone: string;
  waitingNum: number;
};

export default function WaitingModal() {
  const [waitingForm, setWaitingForm] = useState<WaitingForm>({
    people: 0,
    phone: '',
    waitingNum: 0,
  });
  const { Funnel, setStep } = useFunnel(STEPS);

  return (
    <Funnel>
      <Funnel.Step name={STEPS[0]}>
        <PeopleStep setWaitingForm={setWaitingForm} setStep={setStep} />
      </Funnel.Step>
      <Funnel.Step name={STEPS[1]}>
        <PhoneStep waitingForm={waitingForm} setWaitingForm={setWaitingForm} setStep={setStep} />
      </Funnel.Step>
      <Funnel.Step name={STEPS[2]}>
        <CompleteStep
          people={waitingForm.people}
          phone={waitingForm.phone}
          waitingNum={waitingForm.waitingNum}
        />
      </Funnel.Step>
    </Funnel>
  );
}

const PeopleStep = ({
  setWaitingForm,
  setStep,
}: {
  setWaitingForm: (value: WaitingForm) => void;
  setStep: (step: (typeof STEPS)[number]) => void;
}) => {
  const [currentPeople, setCurrentPeople] = useState(0);
  const handleNext = () => {
    setWaitingForm({ people: currentPeople, phone: '', waitingNum: 0 });
    setStep(STEPS[1]);
  };
  return (
    <S.Container animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
      <S.MediumText>손님의 인원 수를 입력해 주세요!</S.MediumText>
      <InputStepper value={currentPeople} setValue={setCurrentPeople} />
      <S.SmallTextFrame>
        <S.SmallText>현장 웨이팅 최대 인원은 12명입니다.</S.SmallText>
      </S.SmallTextFrame>
      <S.Button disabled={currentPeople === 0} onClick={handleNext}>
        다음으로
      </S.Button>
    </S.Container>
  );
};

const PhoneStep = ({
  setStep,
  waitingForm,
  setWaitingForm,
}: {
  setStep: (step: (typeof STEPS)[number]) => void;
  waitingForm: WaitingForm;
  setWaitingForm: (value: WaitingForm) => void;
}) => {
  const [currentPhone, setCurrentPhone] = useState('');
  const addWaiting = useWaitingStore((state) => state.addWaiting);

  const handleNext = async () => {
    const response = await postWaiting({
      visitorCount: waitingForm.people,
      phoneNumber: currentPhone,
    });

    await addWaiting({
      id: response.data.id ? response.data.id : Date.now(),
      createdAt: new Date().toISOString(),
      waitingNum: response.data.waitingNum ? response.data.waitingNum : Date.now(),
      visitorCount: waitingForm.people,
      phoneNumber: currentPhone,
      type: 'WalkIn',
    });
    setWaitingForm({
      people: waitingForm.people,
      phone: currentPhone,
      waitingNum: response.data.waitingNum ? response.data.waitingNum : 0,
    });
    setStep(STEPS[2]);
  };

  useEffect(() => {
    if (currentPhone.length === 11) {
      setCurrentPhone(currentPhone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    } else if (currentPhone.length === 13) {
      setCurrentPhone(
        currentPhone
          //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
    }
  }, [currentPhone]);
  return (
    <S.Container animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
      <S.MediumText>전화드릴 번호를 입력해주세요!</S.MediumText>
      <S.PhoneInput
        type="tel"
        value={currentPhone}
        onChange={(e) => setCurrentPhone(e.target.value)}
        placeholder="010-0000-0000"
      />
      <S.SmallTextFrame>
        <S.SmallText>정확한 전화번호가 맞는지 확인해주세요.</S.SmallText>
      </S.SmallTextFrame>
      <S.Button disabled={currentPhone.length !== 13} onClick={handleNext}>
        등록하기
      </S.Button>
    </S.Container>
  );
};

const CompleteStep = ({
  people,
  phone,
  waitingNum,
}: {
  people: number;
  phone: string;
  waitingNum: number;
}) => {
  const clearModal = useModalStore((state) => state.clearModals);

  const [, setSearchParams] = useSearchParams();
  const handleClose = () => {
    clearModal();
    setSearchParams({});
  };
  return (
    <S.Container animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
      <S.MediumText>완료! 웨이팅이 추가됐어요.</S.MediumText>
      <S.GraySection>
        <S.TextFrame>
          <S.NumText>번호</S.NumText>
          <S.SmallText>{String(waitingNum).padStart(4, '0')}번</S.SmallText>
        </S.TextFrame>
        <S.TextFrame>
          <S.NumText>방문 인원</S.NumText>
          <S.SmallText>{people}명</S.SmallText>
        </S.TextFrame>
        <S.TextFrame>
          <S.PhoneNum>{phone}</S.PhoneNum>
        </S.TextFrame>
      </S.GraySection>
      <S.SmallTextFrame>
        <S.SmallText>입장 순서가 되면 ‘전화 걸기’를 통해</S.SmallText>
        <S.SmallText>입장 안내를 도와주세요.</S.SmallText>
      </S.SmallTextFrame>
      <S.Button onClick={handleClose}>확인</S.Button>
    </S.Container>
  );
};
