import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.nav)`
  width: 100%;
  height: 6.62rem;
  overflow: hidden;
  padding: 0.5rem 1.25rem 2rem;
  border-top: 0.0625rem solid ${(props) => props.theme.colors.grayScale.gy950};
  background-color: ${(props) => props.theme.colors.grayScale.black};
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextSection = styled.div`
  display: flex;
  gap: 0.12rem;
  align-items: center;
`;

export const HeaderText = styled.span`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Text = styled.span`
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.grayScale.gy200};
`;

export const variants = {
  hidden: { y: '100%' },
  visible: { y: 0 },
  exit: { y: '100%' },
};

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled(motion.button)`
  display: flex;
  width: 3.75rem;
  padding: 0.5rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  border: none;
  border-radius: 0.25rem;
`;

export const ButtonText = styled.span`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy100};
`;
