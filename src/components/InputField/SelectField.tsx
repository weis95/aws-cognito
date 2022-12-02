import { Box } from 'components/Shared/Box.styled'
import { Label } from 'components/Shared/Label.styled'
import React, { useEffect, useState } from 'react'

import { StyledSelectField } from './InputField.styled'

interface Props {
  label?: string
  placeholder?: string
  options: string[]
  width?: number
  selected?: string
  onChange?: (priority: string) => void
  innerRef?: React.MutableRefObject<HTMLSelectElement | null>
  disabled?: boolean
}
const SelectField = ({
  label,
  placeholder,
  options,
  width,
  selected,
  onChange,
  innerRef,
  disabled,
}: Props) => {
  const [currentSelected, setSelected] = useState(selected)

  useEffect(() => {
    setSelected(selected)
  }, [selected])

  const onChangeEvent = (value: string) => {
    setSelected(value)
    onChange && onChange(value)
  }

  return (
    <Box direction="column" width={width}>
      {label && (
        <Label size="small" style={{ textAlign: 'left' }}>{`${label}`}</Label>
      )}
      <StyledSelectField
        ref={innerRef}
        onChange={(event) => onChangeEvent(event.target.value)}
        placeholder={placeholder}
        value={currentSelected}
        disabled={disabled}
      >
        {options.map((option: string) => (
          <option key={option}>{option}</option>
        ))}
      </StyledSelectField>
    </Box>
  )
}

export default SelectField
