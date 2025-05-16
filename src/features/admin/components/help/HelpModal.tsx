import { AlarmButton } from '@/components/button';
import * as S from './HelpModal.styles';

export default function HelpModal() {
  return (
    <S.Container>
      <S.Section>
        <S.TextFrame>
          <S.Title>2번째로 입장 대기하고 계신 고객님께</S.Title>
          <S.Title>자동으로 ‘근처 대기' 알림이 발송돼요</S.Title>
        </S.TextFrame>
        <S.GraySection>
          <S.TextFrame>
            <S.Body>입장까지 2팀 남았습니다.</S.Body>
            <S.Body>주점 근처에서 대기해주세요!</S.Body>
          </S.TextFrame>
        </S.GraySection>
      </S.Section>

      <S.TextFrame>
        <S.Title>입장 알림 버튼을 누르면</S.Title>
        <S.Title>입장 안내 알림을 보낼 수 있어요!</S.Title>
      </S.TextFrame>
      <S.GraySection>
        <AlarmButton size="small" />
        <S.TextFrame>
          <S.Body>지금 바로 입장이 가능합니다.</S.Body>
          <S.Body>주점에서 안내를 따라주세요!</S.Body>
        </S.TextFrame>
      </S.GraySection>
      <S.Caption>현장 웨이팅 대기자에게는 알림 기능이 제공되지 않습니다.</S.Caption>
    </S.Container>
  );
}
