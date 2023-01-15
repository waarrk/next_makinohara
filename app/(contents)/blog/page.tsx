import Image from 'next/image'

import Link from 'next/link'
import { getList } from '@/libs/microcms'

export default async function Blog() {
  const { contents } = await getList()

  const time = new Date().toLocaleString()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <>
      <section className='grid justify-center gap-6 pt-12 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h2 className='text-base_color text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-5xl'>
            Blog
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
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h1>{time}</h1>
          <ul>
            {contents.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/static/${post.id}`}>{post.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
