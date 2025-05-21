import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 2.75rem;
  padding: 0.625rem 1.5rem;
  display: flex;
  gap: 2.3rem;
  justify-content: space-between;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
`;

export const SelectedText = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
  flex: 1;
  ${(props) => props.theme.fonts.body.small500};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
`;

export const Select = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 3rem;
  padding: 0.225rem 0.25rem;
  width: 100%;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  overflow: hidden;
  max-height: 12rem;
  overflow-y: auto;
`;

export const SelectItem = styled(motion.div)`
  height: 2.75rem;
  border-radius: 0.25rem;
  padding: 0.325rem 1.25rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.body.small500};
`;
