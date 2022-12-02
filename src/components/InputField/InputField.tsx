import { Box } from 'components/Shared/Box.styled'
import { Label } from 'components/Shared/Label.styled'
import React, { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'

import { StyledInputField } from './InputField.styled'

interface Props {
  type: string
  label?: string
  placeholder?: string
  width?: number
  innerRef?: React.MutableRefObject<HTMLInputElement | HTMLInputElement | null>
  value?: string | number
  disabled?: boolean
  onChange?: () => void
  className?: string
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  min?: number
  padding?: string
  setValue?: Dispatch<SetStateAction<string>>
}
const InputField = ({
  type,
  label,
  placeholder,
  width,
  padding,
  innerRef,
  value,
  disabled,
  onChange,
  className,
  onKeyDown,
  setValue,
  min,
}: Props) => {
  const [inputValue, setInputValue] = useState(value || '')

  const onChangeEvent = (value: string | number) => {
    onChange && onChange()
    setValue && setValue(value as string)
    setInputValue(value)
  }

  return (
    <Box direction="column" width={width} padding={padding}>
      {label && (
        <Label size="small" style={{ textAlign: 'left' }}>{`${label}`}</Label>
      )}
      <StyledInputField
        min={min}
        className={className}
        disabledStyle={disabled}
        ref={innerRef}
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onKeyDown={onKeyDown}
        onChange={(event) => onChangeEvent(event.target.value)}
      />
    </Box>
  )
}

export default InputField
