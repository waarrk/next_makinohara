'use client'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

import Link from 'next/link'

import { useState } from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col align-middle h-24 px-12'>
      <hr className='border-slate-200' />
      <div className='flex container md:max-w-[45rem] mx-auto pt-5'>
        <div className='w-[100%] flex items-center justify-between gap-8'>
          <div className='flex justify-between gap-4'>
            <Link href='https://www.instagram.com/waarrk/'>
              <InstagramIcon className='text-slate-700' />
            </Link>
            <Link href='https://github.com/waarrk'>
              <GitHubIcon className='text-slate-700' />
            </Link>
            <Link href='https://twitter.com/waarrk'>
              <TwitterIcon className='text-slate-700' />
            </Link>
          </div>

          <p className='leading-normal text-slate-700 sm:text-base sm:leading-7'>
            © 2023 Yusaku Washio
          </p>
        </div>
      </div>
    </div>
  )
}
