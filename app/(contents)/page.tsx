import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='relative w-screen ml-[calc(50%-50vw)]'>
        <Image
          alt='catch'
          src='/contents/catch.webp'
          width={1920}
          height={1080}
          sizes='100vw'
          className='w-screen object-contain'
        />
      </div>

      <section className='grid justify-center gap-6 pt-12 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h2 className='text-base_color text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-6xl'>
            Greetings
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            I am an engineer in Japan. Thanks for coming to this site. I live
            for beautiful and fun things. I created this web page in the hope
            that I can share a little fun with you all. Please take a look.
            <br />
            <br />
            初めまして．ご覧いただきありがとうございます．私は綺麗なものや楽しいもののために生きています．皆さんに少しの楽しいのお裾分けができたらいいなと思いWebページを作成しました．ぜひご覧くださいませ．
          </p>
        </div>
      </section>

      <hr className='border-slate-200' />

      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h2 className='text-base_color text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-6xl'>
            New
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            I am an engineer in Japan. Thanks for coming to this site. I live
            for beautiful and fun things. I created this web page in the hope
            that I can share a little fun with you all. Please take a look.
          </p>
        </div>
      </section>

      <hr className='border-slate-200' />

      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h2 className='text-base_color text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-6xl'>
            Photography
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            Since photographing the partial solar eclipse in 2009, I have been
            fascinated by &quot;photographing things invisible to the human
            eye&quot; and &quot;things that are more beautiful when captured in
            photographs.&quot; I have been photographing landscapes, cats, wild
            birds, and other living creatures at aquariums around Japan,
            focusing on astronomical photography.
            <br />
            <br />
            2009年の部分日食の撮影以来「人間の目に見えないものを撮ること」や「写真に写すともっと綺麗になるもの」に魅力を感じ，
            天体写真を中心に、風景、猫、野鳥をはじめ、日本各地の水族館でいきものの撮影を行っております．
          </p>
        </div>
      </section>

      <hr className='border-slate-200' />

      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h2 className='text-base_color text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-6xl'>
            Engineering
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            Since I am learning little by little in the areas that interest me,
            I do not have a specialty, something I can proudly say I am good at
            (Dunning-Kruger effect). If I had to say so, I might have a little
            longer experience in embedded development. Skill sets are shown
            below. I am going to support i18n soon, so please forgive me.
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
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
            株式会社セキュアサイクル　プログラマ
            <br />
            <br />
            一般社団法人コード・フォー・ジャパン　（　~ 2022 まで）
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
            STM32F、STM32Lを主に使用．HAL層における開発の知識あり．ARM、RL78系マイコンの使用経験．開発実務経験3年以上．
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Software
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            C/C++による組み込みプログラム開発　数値解析．Python3によるAPI設計
            暗号生成
            確率データ分析．Next.jsによるWebアプリ開発．ksnctfレベルのセキュリティ知識．
          </p>
          <h2 className='text-base_color text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl'>
            Interests
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            非中央集権ネットワーク FPGA Golang Flutter
          </p>
        </div>
      </section>

      <hr className='border-slate-200' />

      <section className='grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h2 className='text-base_color text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl'>
            Notes
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-base sm:leading-7'>
            This site was created using the appDir of Next.js13 on a trial
            basis. Since this is currently a beta version, there may be some
            bugs or malfunctions. We will try to check the PR of dependabot and
            update it when we become aware of it, but please understand.
            <br />
            <br />
            このサイトは試験的にNext.js13のappDirを使用し作成しております．現在のところBeta扱いの機能ですので，動作不良やバグが考えられます．
            dependabotのPRを確認しアップデートに努めておりますが，ご了承くださいませ．
          </p>
        </div>
      </section>
    </>
  )
}
