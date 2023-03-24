import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Random from '../components/Random'
export default function _app() {
  return (
    <div>
      <Random/>
    </div>
  )
}
