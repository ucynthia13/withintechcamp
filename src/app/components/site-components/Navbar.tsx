import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <div className="w-full flex justify-around items-center py-6 px-4 bg-white">
      <Image src="/images/withintech.png" alt="logo" width={80} height={80} />
      <div className="flex gap-4 ">
        <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Donate</a>
      </div>
      <Button variant="default" className="h-11 rounded-full px-8">Apply</Button>
    </div>
  )
}

export default Navbar
