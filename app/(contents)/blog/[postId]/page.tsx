import Image from 'next/image'

import { notFound } from 'next/navigation'
import parse from 'html-react-parser'
import { getDetail, getList } from '@/libs/microcms'

import Link from 'next/link'

export async function generateStaticParams() {
  const { contents } = await getList()

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    }
  })

  return [...paths]
}

interface PageLayoutProps {
  params: { postId: string }
}

export default async function Page({ params: { postId } }: PageLayoutProps) {
  const post = await getDetail(postId)

  // ページの生成された時間を取得
  const time = new Date().toLocaleString()

  if (!post) {
    notFound()
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
          <div>
            <h1>{post.title}</h1>
            <h2>{time}</h2>
            <div>{parse(post.content)}</div>
          </div>
        </div>
      </section>
    </>
  )
}
