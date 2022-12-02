import React from 'react'
import { Link } from 'wouter'

import { StyledLinkText } from './LinkText.styled'

interface Props {
  text: string
  route: string
  padding?: string
}

export const LinkText = ({ text, route, padding }: Props) => (
  <Link href={route}>
    <StyledLinkText padding={padding}>{text}</StyledLinkText>
  </Link>
)
