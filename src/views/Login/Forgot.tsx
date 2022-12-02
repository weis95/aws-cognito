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

export const Forgot = () => {
  const auth = useAuth()
  const [username, setUsername] = useState<string>('')
  const { setLocation } = useAppContext()

  const resetPassword = async () => {
    const result = await auth.forgotPassword(username)
    if (result.success) {
      setLocation('/change')
    } else {
      alert(result.message)
    }
  }

  return (
    <Box padding={bigTop} justify="center">
      <SmallBox direction="column">
        <Title>Forgot</Title>
        <InputField
          value={username}
          setValue={setUsername}
          padding={smallTop}
          placeholder="Email"
          type="email"
        />
        <Button
          onClick={() => resetPassword()}
          padding={mediumTop}
          text="Send reset code"
        />
        <LinkText
          padding={smallTop}
          text="Already have a user?"
          route="/login"
        />
        <LinkText
          padding={smallTop}
          text="Not registered yet?"
          route="/register"
        />
      </SmallBox>
    </Box>
  )
}
