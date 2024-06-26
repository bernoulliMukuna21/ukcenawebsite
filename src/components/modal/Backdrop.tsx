import { StyledBackdrop } from './style'

type ModalProps = {
  children: any
  onClick: any
}

const Backdrop = ({ children, onClick }: ModalProps) => {
  return (
    <StyledBackdrop onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </StyledBackdrop>
  )
}

export default Backdrop
