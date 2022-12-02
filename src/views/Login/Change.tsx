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

export const Change = () => {
  const auth = useAuth()
  const [code, setCode] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { setLocation } = useAppContext()

  const resetPassword = async () => {
    const result = await auth.forgotPasswordSubmit(code, password)
    if (result.success) {
      setLocation('/login')
    } else {
      alert(result.message)
    }
  }

  return (
    <Box padding={bigTop} justify="center">
      <SmallBox direction="column">
        <Title>Change Password</Title>
        <InputField
          value={code}
          setValue={setCode}
          padding={smallTop}
          placeholder="Password reset code"
          type="text"
        />
        <InputField
          value={password}
          setValue={setPassword}
          padding={smallTop}
          placeholder="New password"
          type="password"
        />
        <Button
          onClick={() => resetPassword()}
          padding={mediumTop}
          text="Change password"
        />
        <LinkText
          padding={smallTop}
          text="Already have a user?"
          route="/login"
        />
      </SmallBox>
    </Box>
  )
}
