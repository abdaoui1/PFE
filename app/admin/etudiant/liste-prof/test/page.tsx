'use client'

import React, { useEffect, useState } from 'react'

const Test = () => {
    const [type , setType ] = useState('bonjour')

    useEffect( ()=> {
        setType('hello') 
    } , [])

  return (
    <div>type  = {type}</div>
  )
}

export default Test