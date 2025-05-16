import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  ${(props) => props.theme.fonts.body.xsmall500}
  color: ${(props) => props.theme.colors.grayScale.gy400};
`;
