import * as S from './CallModal.styles';

export default function CallModal({ tel, num }: { tel: string; num: string }) {
  const handleClick = () => {
    const phoneNumber = tel.replace(/-/g, '');
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <S.Container>
      <S.GraySection>
        <S.TextFrame>
          <S.SmallText $isGray={true}>번호</S.SmallText>
          <S.MediumText $isGray={false} $isBold={true}>
            {num}번
          </S.MediumText>
        </S.TextFrame>
        <S.MediumText $isGray={true} $isBold={false}>
          {tel}
        </S.MediumText>
      </S.GraySection>
      <S.SmallText $isGray={false}>아래 버튼을 누르면 해당 대기자에게 전화를 겁니다.</S.SmallText>
      <S.Anchor href={`tel:${tel.replace(/-/g, '')}`}>
        <S.Button whileTap={{ scale: 0.97 }} onClick={handleClick}>
          전화 걸기
        </S.Button>
      </S.Anchor>
    </S.Container>
  );
}
