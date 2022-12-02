import Button from 'components/Button/Button'
import InputField from 'components/InputField/InputField'
import { LinkText } from 'components/LinkText/LinkText'
import { Box } from 'components/Shared/Box.styled'
import { SmallBox } from 'components/Shared/SmallBox.styled copy'
import { Title } from 'components/Shared/Title.styled'
import { useAuth } from 'helpers/auth'
import { useAppContext } from 'providers/AppProvider'
import React, { useState } from 'react'
import { bigTop, mediumTop, smallTop } from 'styles/spacings'

export const Confirm = () => {
  const auth = useAuth()
  const [code, setCode] = useState<string>('')
  const { setLocation } = useAppContext()

  const confirm = async () => {
    const result = await auth.confirmSignUp(code)
    if (result.success) {
      setLocation('/')
    } else {
      alert(result.message)
    }
  }

  return (
    <Box padding={bigTop} justify="center">
      <SmallBox direction="column">
        <Title>Confirm</Title>
        <InputField
          value={code}
          setValue={setCode}
          padding={smallTop}
          placeholder="Confirmation code"
          type="text"
        />
        <Button onClick={() => confirm()} padding={mediumTop} text="Confirm" />
        <LinkText
          padding={smallTop}
          text="Already have a user?"
          route="/login"
        />
      </SmallBox>
    </Box>
  )
}
