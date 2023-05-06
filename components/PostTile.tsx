import Image from 'next/image'

interface PostTileProps {
  title: string
  date: string
  image: string
  tag: string
}

export default function PostTile({ title, date, image, tag }: PostTileProps) {
  return (
    <>
      <a
        href='#'
        className='group h-48 md:h-64 flex flex-col bg-gray-100 rounded-md shadow-lg overflow-hidden relative'
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
          <h2 className='text-white text-xl font-semibold transition duration-100 mb-2'>
            {title}
          </h2>
          <div className='flex justify-between'>
            <span className='block text-gray-200 text-sm'>{date}</span>
            <span className='bg-blue-100 bg-opacity-50 text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full'>
              {tag}
            </span>
          </div>
        </div>
      </a>
    </>
  )
}
