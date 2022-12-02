import styled, { css } from 'styled-components'
import { primary } from 'styles/colors'
import { small } from 'styles/fonts'

interface Props {
  padding?: string
}

export const StyledLinkText = styled.p<Props>`
  color: ${primary};
  font-size: ${small};
  cursor: pointer;
  margin: 0;
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
`
