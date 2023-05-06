import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ContentsLayoutProps {
  children: React.ReactNode
}

export default function ContentsLayout({ children }: ContentsLayoutProps) {
  return (
    <div>
      <Header />
      <main className='z-10 flex-1 container mx-auto px-4'>{children}</main>
      <Footer />
    </div>
  )
}
