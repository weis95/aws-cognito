import { CognitoUser } from 'amazon-cognito-identity-js'
import { Amplify, Auth } from 'aws-amplify'
import { AwsConfigAuth } from 'config/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

Amplify.configure({ Auth: AwsConfigAuth })
export type AuthUser = CognitoUser
interface UseAuth {
  isLoading: boolean
  isAuthenticated: boolean
  username: string
  token: string
  email: string
  signUp: (username: string, password: string) => Promise<Result>
  confirmSignUp: (code: string) => Promise<Result>
  signIn: (username: string, password: string) => Promise<Result>
  forgotPassword: (username: string) => Promise<Result>
  forgotPasswordSubmit: (code: string, password: string) => Promise<Result>
  signOut: () => Promise<Result>
}

interface Result {
  success: boolean
  message: string
}

type Props = {
  children?: React.ReactNode
}

const AuthContext = createContext({} as UseAuth)

export const ProvideAuth: React.FC<Props> = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

const useProvideAuth = (): UseAuth => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    let ignore = false

    if (!ignore) {
      Auth.currentAuthenticatedUser()
        .then((result) => {
          setUsername(result.username)
          setEmail(result.attributes.email)
          setIsAuthenticated(true)
          setToken(result.signInUserSession.accessToken.jwtToken)
          setIsLoading(false)
        })
        .catch(() => {
          setUsername('')
          setEmail('')
          setIsAuthenticated(false)
          setToken('')
          setIsLoading(false)
        })
    }

    return () => {
      ignore = true
    }
  }, [])

  const signUp = async (username: string, password: string) => {
    try {
      await Auth.signUp(username, password)
      setUsername(username)
      return { success: true, message: '' }
    } catch (error) {
      return {
        success: false,
        message: 'signup failed',
      }
    }
  }

  const confirmSignUp = async (code: string) => {
    try {
      await Auth.confirmSignUp(username, code)
      setIsAuthenticated(true)
      return { success: true, message: '' }
    } catch (error) {
      return {
        success: false,
        message: 'confirmSignUp failed',
      }
    }
  }

  const signIn = async (username: string, password: string) => {
    try {
      const result = await Auth.signIn(username, password)
      setUsername(result.username)
      setEmail(result.attributes.email)
      setToken(result.signInUserSession.accessToken.jwtToken)
      setIsAuthenticated(true)
      return { success: true, message: '' }
    } catch (error) {
      return {
        success: false,
        message: 'signIn failed',
      }
    }
  }

  const forgotPassword = async (username: string) => {
    try {
      await Auth.forgotPassword(username)
      setUsername(username)
      return { success: true, message: '' }
    } catch (error) {
      return {
        success: false,
        message: 'forgotPassword failed',
      }
    }
  }

  const forgotPasswordSubmit = async (code: string, password: string) => {
    try {
      await Auth.forgotPasswordSubmit(username, code, password)
      return { success: true, message: '' }
    } catch (error) {
      return {
        success: false,
        message: 'forgotPasswordSubmit failed',
      }
    }
  }

  const signOut = async () => {
    try {
      await Auth.signOut()
      setUsername('')
      setEmail('')
      setIsAuthenticated(false)
      setToken('')
      return { success: true, message: '' }
    } catch (error) {
      return {
        success: false,
        message: 'signOut failed',
      }
    }
  }

  return {
    isLoading,
    isAuthenticated,
    username,
    token,
    email,
    signUp,
    confirmSignUp,
    signIn,
    forgotPassword,
    forgotPasswordSubmit,
    signOut,
  }
}
