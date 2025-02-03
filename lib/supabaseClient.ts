console.warn("Using mock Supabase client. Replace with actual client in production.")

export const supabase = {
  auth: {
    signIn: () => Promise.resolve({ user: null, error: null }),
    signUp: () => Promise.resolve({ user: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
  },
  from: () => ({
    select: () => ({
      order: () => Promise.resolve({ data: [], error: null }),
    }),
    insert: () => Promise.resolve({ data: null, error: null }),
  }),
}

