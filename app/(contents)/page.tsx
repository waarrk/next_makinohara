import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='relative w-screen ml-[calc(50%-50vw)]'>
        <Image
          alt='catch'
          src='/contents/catch.webp'
          width={1920}
          height={1080}
          sizes='100vw'
          className='w-screen object-contain'
        />
      </div>

      <section className='grid justify-center gap-6 pt-12 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[42rem]'>
          <h2 className='text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-6xl'>
            Greetings
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            I am an engineer in Japan. Thanks for coming to this site. I live
            for beautiful and fun things. I created this web page in the hope
            that I can share a little fun with you all. Please take a look.
            <br />
            <br />
            初めまして．ご覧いただきありがとうございます．私は綺麗なものや楽しいもののために生きています．皆さんに少しの楽しいのお裾分けができたらいいなと思いWebページを作成しました．ぜひご覧くださいませ．
          </p>
        </div>
      </section>

      <hr className='border-slate-200' />

      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[42rem]'>
          <h2 className='text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-6xl'>
            New
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            I am an engineer in Japan. Thanks for coming to this site. I live
            for beautiful and fun things. I created this web page in the hope
            that I can share a little fun with you all. Please take a look.
          </p>
        </div>
      </section>

      <hr className='border-slate-200' />

      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[42rem]'>
          <h2 className='text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-6xl'>
            Photography
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            I am an engineer in Japan. Thanks for coming to this site. I live
            for beautiful and fun things. I created this web page in the hope
            that I can share a little fun with you all. Please take a look.
          </p>
        </div>
      </section>

      <hr className='border-slate-200' />

      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[42rem]'>
          <h2 className='text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-6xl'>
            Engineering
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            I am an engineer in Japan. Thanks for coming to this site. I live
            for beautiful and fun things. I created this web page in the hope
            that I can share a little fun with you all. Please take a look.
          </p>
        </div>
      </section>

      <hr className='border-slate-200' />

      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[42rem]'>
          <h2 className='text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl'>
            Notes
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            I am an engineer in Japan. Thanks for coming to this site. I live
            for beautiful and fun things. I created this web page in the hope
            that I can share a little fun with you all. Please take a look.
          </p>
        </div>
      </section>
    </>
  )
}
