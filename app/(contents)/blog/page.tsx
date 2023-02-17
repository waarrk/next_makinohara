import Image from 'next/image'

import Link from 'next/link'
import PostTile from '@/components/PostTile'
import dayjs from 'dayjs'
import { getList } from '@/libs/microcms'

export default async function Blog() {
  const { contents } = await getList()

  const time = new Date().toLocaleString()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <>
      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-10'>
          {contents.map((post) => {
            return (
              <div key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  <PostTile
                    title={post.title}
                    date={dayjs(post.createdAt).format('YYYY年MM月DD日')}
                    image={post.eyecatch?.url ?? ''}
                    tag={post.category.name}
                  />
                  <a></a>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
