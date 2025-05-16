import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 1.75rem;
  padding: 0.3125rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
  margin: 0.37rem 0rem;
`;

export const Text = styled.span`
  ${(props) => props.theme.fonts.body.xsmall500}
  color: ${(props) => props.theme.colors.grayScale.gy400};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
