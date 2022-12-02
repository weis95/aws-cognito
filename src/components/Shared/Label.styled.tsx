import styled, { css } from 'styled-components'
import { black, primary } from 'styles/colors'
import { medium, semibold, small } from 'styles/fonts'

type Size = 'small' | 'regular'

interface Props {
  size?: Size
  padding?: string
  primary?: boolean
}

export const Label = styled.label<Props>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) =>
    props.size === 'small'
      ? css`
          font-size: ${small};
        `
      : css`
          font-size: ${medium};
        `};

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};

  font-weight: ${semibold};

  ${(props) =>
    props.primary
      ? css`
          color: ${primary};
        `
      : css`
          color: ${black};
        `};
`
