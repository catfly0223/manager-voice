import { useState, useEffect } from "react"
import { mockUser } from "../lib/mockData"

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setUser(mockUser)
      setLoading(false)
    }, 1000)
  }, [])

  const signIn = async (email: string, password: string) => {
    // Simulate sign in
    setUser(mockUser)
  }

  const signUp = async (email: string, password: string) => {
    // Simulate sign up
    setUser(mockUser)
  }

  const signOut = async () => {
    // Simulate sign out
    setUser(null)
  }

  return { user, loading, signIn, signUp, signOut }
}

