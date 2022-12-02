import { Box } from 'components/Shared/Box.styled'
import React from 'react'

import { StyledButton } from './Button.styled'

interface Props {
  text: string
  onClick: () => void
  width?: number
  padding: string
}

const Button = ({ text, onClick, width, padding }: Props) => (
  <Box width={width} padding={padding}>
    <StyledButton type="button" onClick={onClick} value={text} />
  </Box>
)

export default Button
