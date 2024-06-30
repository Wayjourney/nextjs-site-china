import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20'>
      <div className='mx-auto max-w-screen-xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40'>
        <div className='px-6 lg:px-0 lg:pt-4'>
          <div className='mx-auto max-w-2xl'>
            <div className='lg:max-w-lg'>
              <h1 className='mt-10 lg:mt-0 text-4xl font-bold !leading-[1.2] tracking-tight text-gray-900 sm:text-6xl text-center lg:text-left'>
                热工设备隔热保温首选产品
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                我公司产品广泛应用于钢铁、水泥、有色金属、玻璃、石化、陶瓷、焦化等行业。主要生产有陶瓷蛭石保温板、超轻纳米隔热砖、机制高铝隔热砖、莫来石质隔热砖、聚轻球隔热砖、硅质
                隔热砖、高强漂珠砖、粘土质隔热保温砖以及配套的不定型浇注料。
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='/about'
                  className='rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                >
                  了解更多
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto mt-20 max-w-[600px] sm:mt-24 lg:mx-0 lg:mt-0'>
          <div
            className='absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36'
            aria-hidden='true'
          />

          <Image
            src={'/img/factory.jpg'}
            alt='瑞斯特耐工厂'
            width='1200'
            height='800'
            className='sm:rounded-2xl'
            priority
          />
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
    </div>
  );
}
