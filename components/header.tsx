'use client'
import Link from 'next/link'

import Drawer from '@mui/material/Drawer'

import MenuIcon from '@mui/icons-material/Menu'
import AdjustIcon from '@mui/icons-material/Adjust'

import { useState } from 'react'

export default function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  return (
    <div className='flex-1 container md:max-w-[52rem] mx-auto my-4 px-8 md:px-4'>
      <div className='flex items-center justify-between py-2'>
        <div className='flex items-end justify-between gap-6'>
          <h2 className='text-2xl font-bold leading-[1.1] tracking-tighter'>
            waarrk
          </h2>
          <div className='hidden md:flex gap-2'>
            <Link
              className='text-slate-700 hover:text-slate-900 hover:font-bold'
              href='/'
            >
              Blog
            </Link>
            <Link
              className='text-slate-700 hover:text-slate-900 hover:font-bold'
              href='/'
            >
              Gallery
            </Link>
          </div>
        </div>

        <MenuIcon className='md:hidden' onClick={() => setDrawerOpened(true)} />
        <Drawer
          anchor={'right'}
          open={drawerOpened}
          onClose={() => setDrawerOpened(false)}
        >
          <div className='w-[33vw]'>
            <div className='flex flex-col gap-2 items-start justify-center py-12'>
              <Link
                className='text-2xl pl-6 text-slate-700 hover:text-slate-900 hover:font-bold'
                href='/'
              >
                Blog
              </Link>
              <Link
                className='text-2xl pl-6 text-slate-700 hover:text-slate-900 hover:font-bold'
                href='/'
              >
                Gallery
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  )
}
