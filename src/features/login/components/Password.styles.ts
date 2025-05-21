import styled from 'styled-components';

export const Input = styled.input<{ $isError: boolean }>`
  display: flex;
  width: 100%;
  padding: 1.125rem;
  align-items: flex-start;
  gap: 0.625rem;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  border: 1px solid
    ${(props) =>
      props.$isError
        ? props.theme.colors.secondary.rd500
        : props.theme.colors.grayScale.gy600}; /* stylelint-disable-line */

  border-radius: 0.75rem;
  ${(props) => props.theme.fonts.body.small400}
  color: ${(props) =>
    props.$isError ? props.theme.colors.secondary.rd500 : props.theme.colors.grayScale.white};

  ::placeholder {
    color: ${(props) => props.theme.colors.grayScale.gy400};
  }

  &:focus {
    outline: none;
    border: 1px solid
      ${(props) =>
        props.$isError
          ? props.theme.colors.secondary.rd500
          : props.theme.colors.grayScale.white}; /* stylelint-disable-line */
  }
`;
