import PostTile from '@/components/PostTile'

export default function NewPostGrid() {
  return (
    <>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-10'>
        <PostTile
          title='New trends in Tech'
          date='July 19, 2021'
          image='/contents/catch.webp'
        />
        <PostTile
          title='New trends in Tech'
          date='July 19, 2021'
          image='/contents/catch.webp'
        />
        <PostTile
          title='New trends in Tech'
          date='July 19, 2021'
          image='/contents/catch.webp'
        />
        <div className='hidden xl:inline-block'>
          <PostTile
            title='New trends in Tech'
            date='July 19, 2021'
            image='/contents/catch.webp'
          />
        </div>
      </div>
    </>
  )
}
