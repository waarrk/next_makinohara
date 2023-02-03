'use client'
import Link from 'next/link'
import DrawerMenu from './DrawerMenu'

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

          <DrawerMenu
            drawerOpened={drawerOpened}
            setDrawerOpened={setDrawerOpened}
          />
        </div>
      </div>
    </div>
  )
}
