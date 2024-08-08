"use client";
import React from 'react'
import { Button } from '@headlessui/react';
import Link from 'next/link';
export default function WebBuilder() {
  return (
    <div>
      <Link href={'/webbuild/builder'}>
      <Button>BUILDER</Button></Link>
        
      
    </div>
  )
}
