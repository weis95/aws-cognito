import styled, { css } from 'styled-components'
import {
  black,
  disabled,
  primary,
  secondary,
  shadow,
  white,
} from 'styles/colors'
import { small } from 'styles/fonts'
import { radius, x1, x2 } from 'styles/sizes'

interface Props {
  padding?: number
  disabledStyle?: boolean
}

export const StyledInputField = styled.input<Props>`
  height: 22px;
  background: ${white};
  border: 1px solid ${primary};
  color: ${black};
  padding: ${x1} ${x2};
  border-radius: ${radius};
  font-size: ${small};
  box-shadow: ${shadow}

  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: text;
  }

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};

  ${(props) =>
    props.disabledStyle &&
    css`
      pointer-events: none;
      color: ${disabled};
      border: 1px solid ${disabled};
    `};
`

export const StyledSelectField = styled.select<Props>`
  height: 32px;
  box-shadow: ${shadow};
  background: ${white};
  border: 1px solid ${primary};
  color: ${black};
  padding: ${x1} ${x2};
  border-radius: ${radius};
  font-size: ${small};

  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
  }

  :disabled {
    opacity: 0.6;
    box-shadow: none;
    border: 1px solid ${disabled};
    pointer-events: none;
  }
`

export const StyledCheckboxField = styled.input<Props>`
  background: ${(props) => (props.checked ? white : secondary)};
  border: 1px solid ${primary};
  color: ${black};
  padding: ${x1} ${x2};
  border-radius: ${radius};
  font-size: ${small};
  margin-top: 7px;
  width: 16px;
  height: 16px;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${secondary};
    cursor: pointer;
  }

  ${(props) =>
    props.disabledStyle &&
    css`
      pointer-events: none;
    `};
`
