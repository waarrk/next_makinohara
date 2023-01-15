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
      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h1>{time}</h1>
          <ul>
            {contents.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
