import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  padding: 1.25rem 2.19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const MediumText = styled(Text)`
  ${(props) => props.theme.fonts.body.medium500};
`;

export const SmallText = styled(Text)`
  ${(props) => props.theme.fonts.body.medium500};
`;

export const TextFrame = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const NumText = styled.span`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy400};
`;

export const PhoneNum = styled.span`
  ${(props) => props.theme.fonts.body.medium400};
  color: ${(props) => props.theme.colors.grayScale.gy200};
`;

export const SmallTextFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
`;

export const Button = styled(motion.button)`
  display: flex;
  width: 15rem;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.75rem;
  color: ${(props) => props.theme.colors.grayScale.white};
  background: ${(props) => props.theme.colors.primary.bl400};

  ${(props) => props.theme.fonts.body.medium500};
  &:disabled {
    background: ${(props) => props.theme.colors.grayScale.gy700};
  }
`;

export const PhoneInput = styled.input`
  display: flex;
  width: 12.75rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${(props) => props.theme.colors.grayScale.gy600};
  ${(props) => props.theme.fonts.body.medium500};
  background-color: ${(props) => props.theme.colors.grayScale.black};
  color: ${(props) => props.theme.colors.grayScale.white};

  &:placeholder-shown {
    color: ${(props) => props.theme.colors.grayScale.gy600};
  }

  &:focus {
    outline: none;
    border: 0.0625rem solid ${(props) => props.theme.colors.grayScale.white};
  }
`;

export const GraySection = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
  border-radius: 0.75rem;
`;
