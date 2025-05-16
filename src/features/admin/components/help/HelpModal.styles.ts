import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 2.19rem;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.body.medium500};
`;

export const Body = styled.p`
  color: ${(props) => props.theme.colors.grayScale.gy300};
  ${(props) => props.theme.fonts.body.small400};
`;

export const Caption = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.body.xsmall500};
`;

export const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const GraySection = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
  border-radius: 0.75rem;
`;
