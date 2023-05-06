'use client'
import { useRef, useEffect } from 'react'
import { NextPage } from 'next'

type Props = {
  children: React.ReactNode
  move: string
  delay: number
  className?: string
}

const ScrollReveal: NextPage<Props> = ({
  children,
  move,
  delay,
  className,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        //Dynamic import
        const sr = (await import('scrollreveal')).default
        sr().reveal(sectionRef.current, {
          delay: delay,
          opacity: 0,
          origin: move,
          distance: '20px',
          viewFactor: 0.2,
        })
      }
    }
    animate()
  }, [delay, move, sectionRef])
  return (
    <div className={`${className}`} ref={sectionRef}>
      {children}
    </div>
  )
}
export default ScrollReveal
