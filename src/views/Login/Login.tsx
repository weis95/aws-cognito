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

export const Login = () => {
  const auth = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { setLocation } = useAppContext()

  const login = async () => {
    const result = await auth.signIn(username, password)
    if (result.success) {
      setLocation('/')
    } else {
      alert(result.message)
    }
  }

  return (
    <Box padding={bigTop} justify="center">
      <SmallBox direction="column">
        <Title>Login</Title>
        <InputField
          value={username}
          setValue={setUsername}
          padding={smallTop}
          placeholder="Email"
          type="email"
        />
        <InputField
          value={username}
          setValue={setPassword}
          padding={smallTop}
          placeholder="Password"
          type="password"
        />
        <Button onClick={() => login()} padding={mediumTop} text="Login" />
        <LinkText
          padding={smallTop}
          text="Not registered yet?"
          route="/register"
        />
        <LinkText padding={smallTop} text="Forgot password?" route="/forgot" />
      </SmallBox>
    </Box>
  )
}
