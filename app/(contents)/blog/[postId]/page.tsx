import Image from 'next/image'

import { notFound } from 'next/navigation'
import parse from 'html-react-parser'
import { getDetail, getList } from '@/libs/microcms'
import WriterInfo from '@/components/WriterInfo'

import dayjs from 'dayjs'

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

  // パースオプション
  const options = {
    replace: (domNode: any) => {
      if (domNode.name === 'h1') {
        return (
          <h1 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl py-4'>
            {domNode.children[0].data}
          </h1>
        )
      }
    },
  }

  return (
    <>
      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <div>
            {/* タイトル生成 */}
            <div>
              <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-3xl'>
                {post.title}
              </h2>
              <div className='flex items-center gap-2 mt-3'>
                <span className='bg-blue-100 bg-opacity-50 text-black text-xs font-medium mr-2 px-2.5 py-1 rounded-full'>
                  {post.category.name}
                </span>
                <h2>{dayjs(time).format('YYYY年MM月DD日')}</h2>
              </div>
            </div>

            {/* ライターのプロフィール */}
            <WriterInfo />

            <div>
              {post.contents.map((content, index) => {
                switch (content.fieldId) {
                  case 'richeditor':
                    return parse(content.richEditor, options)
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
