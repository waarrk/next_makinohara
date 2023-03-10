'use client'
import Link from 'next/link'

import Drawer from '@mui/material/Drawer'

import MenuIcon from '@mui/icons-material/Menu'

import { useState } from 'react'

export default function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  return (
    <div className='bg-black py-10 px-12'>
      <div className='flex container md:max-w-[52rem] mx-auto'>
        <div className='w-[100%] flex items-end justify-between gap-8'>
          <Link
            className='text-slate-200 text-2xl font-bold leading-[1.1] tracking-tighter'
            href='/'
          >
            waarrk
          </Link>

          <div className='md:hidden'>
            <MenuIcon
              className=' text-slate-200'
              onClick={() => setDrawerOpened(true)}
            />
          </div>

          <div className='hidden md:flex gap-2'>
            <Link
              className='text-slate-300 hover:text-slate-200 hover:font-bold'
              href='/blog'
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
                  href='/blog'
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
