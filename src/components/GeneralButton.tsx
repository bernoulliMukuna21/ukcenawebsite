import { StyledGeneralButton } from "./style"

type GeneralButtonType = {
  title: string
  backgroundcolor: string
  fontsize: string
  classname?: string
  idName?: string
  buttonType?: "button" | "submit" | "reset" | undefined
  buttonDisabled?: boolean | undefined
}

const GeneralButton = ({
  title,
  backgroundcolor,
  fontsize,
  classname = 'default-button-classname',
  idName = 'default-button-id',
  buttonType = 'button',
  buttonDisabled = undefined
}: GeneralButtonType) => {
  return (
    <StyledGeneralButton
      backgroundcolor={backgroundcolor}
      fontSize={fontsize}
      className={classname}
      id={idName}
      type={buttonType}
      disabled={buttonDisabled}
    >
      {title}
    </StyledGeneralButton>
  )
}

export default GeneralButton