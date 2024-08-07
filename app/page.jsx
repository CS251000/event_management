import HeroSection from '@/components/HomePage/hero'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <div>
        <ClerkProvider>
        <HeroSection/>
        </ClerkProvider>
      
    </div>
  )
}
