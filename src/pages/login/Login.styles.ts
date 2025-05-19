import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 1.25rem 0rem;
`;

export const LabelSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.header.h4};
`;

export const ButtonSection = styled.div`
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: center;
`;

export const Button = styled(motion.button)`
  display: flex;
  width: 100%;
  height: 3.125rem;
  padding: 0.8125rem 1.25rem;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary.bl400};
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.body.medium500};
  border: none;
  border-radius: 0.75rem;

  &:disabled {
    background-color: ${(props) => props.theme.colors.grayScale.gy700};
  }
`;
