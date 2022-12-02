import styled from 'styled-components'
import { primary, white } from 'styles/colors'
import { medium } from 'styles/fonts'
import { radius, x1, x2 } from 'styles/sizes'

export const StyledButton = styled.input`
  width: 100%;
  background: ${white};
  color: ${primary};
  border: 1px solid ${primary};
  padding: ${x1} ${x2};
  border-radius: ${radius};
  font-size: ${medium};
  background: ${primary};
  color: ${white};

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${white};
    color: ${primary};
    cursor: pointer;
  }
`
