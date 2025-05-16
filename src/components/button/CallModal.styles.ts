import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.25rem 0rem;
  padding-bottom: 1.25rem;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const GraySection = styled.div`
  display: flex;
  width: 16.5625rem;
  padding: 1rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 0.75;
  border-radius: 0.75rem;
  background: ${(props) => props.theme.colors.grayScale.gy950};
`;

export const Anchor = styled.a`
  text-decoration: none;
`;

export const Button = styled(motion.button)`
  display: flex;
  width: 15rem;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: none;
  border-radius: 0.75rem;
  background: ${(props) => props.theme.colors.primary.bl400};
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const TextFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SmallText = styled.p<{ $isGray: boolean }>`
  color: ${(props) =>
    props.$isGray ? props.theme.colors.grayScale.gy400 : props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.body.small400};
`;

export const MediumText = styled.p<{ $isGray: boolean; $isBold: boolean }>`
  color: ${(props) =>
    props.$isGray ? props.theme.colors.grayScale.gy200 : props.theme.colors.grayScale.white};
  ${(props) =>
    props.$isBold ? props.theme.fonts.body.medium500 : props.theme.fonts.body.medium400};
`;
