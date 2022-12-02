import Button from 'components/Button/Button'
import { Box } from 'components/Shared/Box.styled'
import { Title } from 'components/Shared/Title.styled'
import { useAuth } from 'helpers/auth'
import { useAppContext } from 'providers/AppProvider'
import React, { useEffect } from 'react'
import { bigTop, mediumTop } from 'styles/spacings'

export const Success = () => {
  const auth = useAuth()
  const { setLocation } = useAppContext()
  const { token } = useAuth()

  const signOut = async () => {
    const result = await auth.signOut()
    if (result.success) {
      setLocation('/login')
    } else {
      alert(result.message)
    }
  }

  useEffect(() => {
    let ignore = false

    if (!ignore) {
      !token && setLocation('/login')
    }

    return () => {
      ignore = true
    }
  }, [])

  return (
    <Box padding={bigTop} justify="center">
      <Box width={30} direction="column">
        <Title>You have logged in.</Title>
        <Button onClick={() => signOut()} padding={mediumTop} text="Log out" />
      </Box>
    </Box>
  )
}
