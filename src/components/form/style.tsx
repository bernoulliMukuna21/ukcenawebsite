import styled from "styled-components";
import { TFormMessage } from "./FormMessage";

type TStyledFormErrorContainer = Omit<TFormMessage, 'message' | 'type'>

export const StyledFormMessageContainer = styled.div<TStyledFormErrorContainer>`
  visibility: ${(props) => props.visibility};
  min-height: 3rem;
`