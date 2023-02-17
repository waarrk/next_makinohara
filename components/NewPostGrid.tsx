import PostTile from '@/components/PostTile'
import { getList } from '@/libs/microcms'
import Link from 'next/link'
import dayjs from 'dayjs'

export default async function NewPostGrid() {
  const { contents } = await getList({
    limit: 4,
    orders: '-createdAt',
  })

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-10'>
        {contents.map((post) => {
          return (
            <div key={post.id}>
              <PostTile
                title={post.title}
                date={dayjs(post.createdAt).format('YYYY年MM月DD日')}
                image={post.eyecatch?.url ?? ''}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}
