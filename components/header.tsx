'use client'
import Link from 'next/link'

import Drawer from '@mui/material/Drawer'

import MenuIcon from '@mui/icons-material/Menu'
import AdjustIcon from '@mui/icons-material/Adjust'

import { useState } from 'react'

export default function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  return (
    <div className='bg-black pt-10 px-12'>
      <div className='flex container md:max-w-[45rem] mx-auto'>
        <div className='w-[100%] flex items-end justify-between gap-8'>
          <h2 className='text-slate-200 text-2xl font-bold leading-[1.1] tracking-tighter'>
            waarrk
          </h2>

          <div className='hidden md:flex gap-2'>
            <Link
              className='text-slate-300 hover:text-slate-200 hover:font-bold'
              href='/'
            >
              Blog
            </Link>
            <Link
              className='text-slate-300 hover:text-slate-200 hover:font-bold'
              href='/'
            >
              Gallery
            </Link>
          </div>

          <MenuIcon
            className='md:hidden text-slate-200'
            onClick={() => setDrawerOpened(true)}
          />
          <Drawer
            anchor={'right'}
            open={drawerOpened}
            onClose={() => setDrawerOpened(false)}
            color='default'
          >
            <div className='w-[33vw]'>
              <div className='flex flex-col gap-2 items-start justify-center py-12'>
                <Link
                  className='text-xl pl-6 text-slate-700 hover:text-slate-900 hover:font-bold'
                  href='/'
                >
                  Blog
                </Link>
                <Link
                  className='text-xl pl-6 text-slate-700 hover:text-slate-900 hover:font-bold'
                  href='/'
                >
                  Gallery
                </Link>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  )
}
