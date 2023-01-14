interface ContentsLayoutProps {
  children: React.ReactNode
}

export default function ContentsLayout({ children }: ContentsLayoutProps) {
  return (
    <div>
      <main className='flex-1 container mx-auto my-4 px-4'>{children}</main>
    </div>
  )
}
