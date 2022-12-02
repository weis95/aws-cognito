import styled from 'styled-components'
import { lg, md, sm } from 'styles/viewports'

import { Box } from './Box.styled'

interface Props {
  direction?: string
  justify?: string
  padding?: string
  align?: string
  margin?: string
}

export const SmallBox = styled(Box)<Props>`
  width: 20%;

  @media (max-width: ${lg}) {
    width: 30%;
  }

  @media (max-width: ${md}) {
    width: 50%;
  }

  @media (max-width: ${sm}) {
    width: 90%;
  }
`
