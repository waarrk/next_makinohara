import Image from 'next/image'

interface NewPostTileProps {
  title: string
  date: string
  image: string
}

export default function NewPostTile({ title, date, image }: NewPostTileProps) {
  return (
    <>
      <a
        href='#'
        className='group h-48 md:h-64 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative'
      >
        <Image
          src={image}
          alt=''
          width={400}
          height={400}
          className='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
        />

        <div className='bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none'></div>

        <div className='relative p-4 mt-auto'>
          <span className='block text-gray-200 text-sm'>{date}</span>
          <h2 className='text-white text-xl font-semibold transition duration-100 mb-2'>
            {title}
          </h2>
          <span className='text-indigo-300 font-semibold'>Read more</span>
        </div>
      </a>
    </>
  )
}
