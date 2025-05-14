'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

function logout() {

}

const Logout = () => {
  return (
    <div>
      <button onClick={(e) => signOut({ callbackUrl: "/" })}>Logout</button>
    </div>
  )
}

export default Logout