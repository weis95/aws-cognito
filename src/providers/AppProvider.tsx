import React, { createContext, PropsWithChildren, useContext } from 'react'

interface AppContext {
  setLocation: (
    to: string,
    options?: { replace?: boolean | undefined } | undefined
  ) => void
}
export const Context = createContext<AppContext>({
  setLocation: () => '',
})

export const AppProvider = ({
  setLocation,
  children,
}: PropsWithChildren<AppContext>) => {
  const contextProps: AppContext = {
    setLocation,
  }
  return <Context.Provider value={contextProps}>{children}</Context.Provider>
}

export const useAppContext = () => useContext<AppContext>(Context)
