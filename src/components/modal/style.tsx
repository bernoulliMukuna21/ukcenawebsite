import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledModal = styled(motion.div)`
  background-color: white;
  margin: auto;
  border-radius: 1.2rem;
  z-index: 4;
`

export const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  z-index: 4;
`
