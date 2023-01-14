export default function Home() {
  return (
    <>
      <hr className='border-slate-200' />
      <section className='grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24'>
        <h1 className='text-3xl font-bold underline'>Good night world!</h1>
      </section>
      <hr className='border-slate-200' />
      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h2 className='text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-4xl'>
            Features
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7'>
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
      </section>
    </>
  )
}
