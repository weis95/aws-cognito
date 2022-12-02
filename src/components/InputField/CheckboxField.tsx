import { Box } from 'components/Shared/Box.styled'
import { Label } from 'components/Shared/Label.styled'
import React, { useEffect, useState } from 'react'

import { StyledCheckboxField } from './InputField.styled'

interface Props {
  label?: string
  width?: number
  justify?: string
  checked?: boolean
  disabled?: boolean
  innerRef?: React.MutableRefObject<HTMLInputElement | null>
  onClick?: () => void
}
const CheckboxField = ({
  label,
  width,
  justify,
  checked,
  disabled,
  innerRef,
  onClick,
}: Props) => {
  const [check, setCheck] = useState(checked)

  useEffect(() => {
    setCheck(checked)
  }, [])
  return (
    <Box direction="row" align="center" justify={justify} width={width}>
      <StyledCheckboxField
        type="checkbox"
        ref={innerRef}
        onChange={() => setCheck(!check)}
        disabledStyle={disabled}
        checked={check}
        onClick={() => onClick && onClick}
      />
      {label && (
        <Label
          style={{
            textAlign: 'left',
            marginLeft: '20px',
            marginTop: '3px',
            fontWeight: '400',
          }}
        >{`${label}`}</Label>
      )}
    </Box>
  )
}

export default CheckboxField
