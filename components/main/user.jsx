'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function UserPage() {

    const {data: session ,status} = useSession()
    
  return (
    <div>User Session : {JSON.stringify(session)}</div>
  )
}
