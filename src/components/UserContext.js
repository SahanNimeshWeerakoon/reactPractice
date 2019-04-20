import React from 'react'

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContex.Consumer

export { UserProvider, UserConsumer }