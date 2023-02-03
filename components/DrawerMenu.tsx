import Link from 'next/link'
import Drawer from '@mui/material/Drawer'

interface DrawerMenuProps {
  drawerOpened: boolean
  setDrawerOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DrawerMenu({
  drawerOpened,
  setDrawerOpened,
}: DrawerMenuProps) {
  return (
    <>
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
    </>
  )
}
