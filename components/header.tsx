import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex-1 container md:max-w-[52rem] mx-auto my-4 px-4 bg-gray-500 md:bg-blue-500'>
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
      </div>
    </div>
  )
}
