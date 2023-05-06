import Image from 'next/image'

export default function WriterInfo() {
  return (
    <>
      <div className='flex items-center flex-col sm:flex-row justify-center gap-16 my-5 rounded-xl border-2 py-10 px-8'>
        <div className='flex items-center flex-row sm:flex-col gap-20 sm:gap-6'>
          <Image
            src='/blog/writer.jpg'
            alt={'Yusaku Washio'}
            width={80}
            height={80}
            className='rounded-full'
          />
          <button className='bg-base_color text-white text-xs  py-1 px-2 w-20 h-8'>
            詳細をみる
          </button>
        </div>
        <div>
          <h3 className='text-base_color text-xl leading-[1.1] tracking-tighter'>
            {'Yusaku Washio　|　鷲尾 優作'}
          </h3>
          <p className='text-base_color text-xs'>
            2003年 新潟県新潟市生まれ waarrk office代表
            <br />
            中学生で組み込みプログラムと出会い、ITに没頭
            <br />
            その後スマホアプリケーション、Webサービス、電子回路設計など幅広い分野を手がける
            <br />
            がじぇっとるねさすデザインコンテスト、NHK高専ロボコン等に出場
            <br />
            3年間の企業経験（FA機器/デバイス開発、セキュリティ等）を経て、令和5年に個人事業を開業
            <br />
            ライフワークとして、日本各地の夢のような絶景を写真や動画で発信している
            <br />
            長岡工業高等専門学校 電子制御工学科 在学中
          </p>
        </div>
      </div>
    </>
  )
}
