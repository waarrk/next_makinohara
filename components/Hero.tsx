import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <div className='w-screen ml-[calc(50%-50vw)] relative'>
        <Image
          alt='catch'
          src='/contents/catch.webp'
          width={1920}
          height={1080}
          sizes='100vw'
          className='w-screen object-contain'
        />

        <div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-4xl font-bold text-white'>Yusaku Washio</h1>
            <p className='text-white'>System Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}
