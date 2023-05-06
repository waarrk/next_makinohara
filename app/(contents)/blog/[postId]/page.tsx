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
      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <div>
            <h1>{post.title}</h1>
            <h2>{time}</h2>
            <div>
              {post.contents.map((content, index) => {
                switch (content.fieldId) {
                  case 'richeditor':
                    return (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: `${content.richEditor}`,
                        }}
                      ></div>
                    )
                  case 'amazonlink':
                    return (
                      <div key={index}>
                        <h3>{content.title}</h3>
                        <Image
                          src={content.picture.url}
                          alt={content.title}
                          width={content.picture.width}
                          height={content.picture.height}
                        />
                        <a href={content.url} target='_blank' rel='noreferrer'>
                          {content.url}
                        </a>
                      </div>
                    )
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
