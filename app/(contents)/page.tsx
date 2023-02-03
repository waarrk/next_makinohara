import Image from 'next/image'

import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-10'>
        <a
          href='#'
          className='group h-48 md:h-64 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative'
        >
          <Image
            src='/contents/catch.webp'
            alt='Photo'
            width={400}
            height={400}
            className='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
          />

          <div className='bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none'></div>

          <div className='relative p-4 mt-auto'>
            <span className='block text-gray-200 text-sm'>July 19, 2021</span>
            <h2 className='text-white text-xl font-semibold transition duration-100 mb-2'>
              New trends in Tech
            </h2>

            <span className='text-indigo-300 font-semibold'>Read more</span>
          </div>
        </a>

        <a
          href='#'
          className='group h-48 md:h-64 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative'
        >
          <Image
            src='/contents/catch.webp'
            alt='Photo'
            width={400}
            height={400}
            className='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
          />

          <div className='bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none'></div>

          <div className='relative p-4 mt-auto'>
            <span className='block text-gray-200 text-sm'>July 19, 2021</span>
            <h2 className='text-white text-xl font-semibold transition duration-100 mb-2'>
              New trends in Tech
            </h2>

            <span className='text-indigo-300 font-semibold'>Read more</span>
          </div>
        </a>

        <a
          href='#'
          className='group h-48 md:h-64 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative'
        >
          <Image
            src='/contents/catch.webp'
            alt='Photo'
            width={400}
            height={400}
            className='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
          />

          <div className='bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none'></div>

          <div className='relative p-4 mt-auto'>
            <span className='block text-gray-200 text-sm'>July 19, 2021</span>
            <h2 className='text-white text-xl font-semibold transition duration-100 mb-2'>
              New trends in Tech
            </h2>

            <span className='text-indigo-300 font-semibold'>Read more</span>
          </div>
        </a>
      </div>

      <hr className='border-slate-200' />

      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h2 className='text-base_color text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-5xl'>
            Engineering
          </h2>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl pt-4'>
            Laboratory
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            システム制御研究室
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Study
          </h2>
          <p className='max-w-[85%] font-bold leading-normal text-slate-700 sm:text-base sm:leading-7'>
            長岡工業高等専門学校　電子制御工学科（在学中）
          </p>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            情報工学　ディジタル工学　論理回路　電子/電気回路　電磁気　力学　電子デバイス　アルゴリズム　データ構造　離散数学
            <br />
            等の体系的な知識．
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Workplace
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            拾壱・ビッグストーン株式会社　設計開発部
            <br />
            株式会社セキュアサイクル
            <br />
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Qualifications
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            第二種電気工事士
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Field of Expertise
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            組み込みプログラム　制御システム　電子回路設計　Webアプリ開発
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Languages
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            C/C++ Python3 TypeScript Rust
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Embedded
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            STM32F、STM32Lを主に使用．HAL開発．ARM、RL78系マイコン
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Software
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            C/C++による組み込みプログラム開発　数値解析．
            Next.jsによるWebアプリ開発．
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Interests
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            非中央集権ネットワーク FPGA Golang Flutter
          </p>
        </div>
      </section>
    </>
  )
}
