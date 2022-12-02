import styled from 'styled-components'
import { red } from 'styles/colors'
import { small } from 'styles/fonts'

export const Warning = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${red};
  font-size: ${small};
  padding: 0;
  margin: 0;
`
