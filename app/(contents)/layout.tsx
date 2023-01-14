import Header from '@/components/header'

interface ContentsLayoutProps {
  children: React.ReactNode
}

export default function ContentsLayout({ children }: ContentsLayoutProps) {
  return (
    <div>
      <Header />
      <main className='z-10 flex-1 container mx-auto px-4'>{children}</main>
    </div>
  )
}
