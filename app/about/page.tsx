import Image from 'next/image';

export default function About() {
  return (
    <main className='isolate'>
      <div className='relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14'>
        <div
          className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96'
          aria-hidden='true'
        ></div>
        <div className='mx-auto max-w-screen-xl px-6 pt-6 sm:pt-12 lg:px-8 lg:py-28'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            郑州瑞斯特耐有限公司
          </h1>
          <div className='mt-6'>
            <p className='max-w-2xl text-lg leading-8 text-gray-600'>
              面对时代的机遇与挑战，始终贯彻“质量为本、专注求真、追求卓
              越”的经营理念，以严谨求实的态度和公平诚信的服务思想发展自己，创造价值，回报社会。
            </p>
          </div>
          <figure className='-mx-6 mt-10 overflow-hidden lg:mx-0 lg:mt-20 lg:rounded-2xl'>
            <Image
              className='w-full object-cover object-center'
              src='/img/about/about.jpg'
              alt='郑州瑞斯特耐有限公司'
              width='1200'
              height='800'
              priority
            />
          </figure>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>

      <div className='overflow-hidden bg-[#F5F5F5] pt-14 lg:pt-20'>
        <div className='mx-auto max-w-screen-xl px-6 lg:flex lg:px-8'>
          <div className='mx-auto grid grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
            <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                公司位置
              </h2>
              <p className='mt-6 text-xl leading-8 text-gray-600'>
                郑州瑞斯特耐有限公司总部位于中原腹地新密市，北望黄河、西依嵩山、贯通郑汴洛、连接许平南，是华夏文明的重要发祥地之一。交通位置优越，地处郑州大都市区、郑州国家中心城市
                中心地带和郑州航空港区经济圈，郑少、郑尧、商登高速和郑登快速通道等骨干路网畅通便捷。
              </p>
            </div>
            <div className='flex flex-col flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents lg:flex-row'>
              <div className='w-full lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
                <Image
                  src='/img/about/about-1.jpg'
                  alt='郑州瑞斯特耐有限公司'
                  className='w-full max-w-none rounded-2xl bg-gray-50 object-cover lg:aspect-[7/5] lg:w-[37rem]'
                  width='1200'
                  height='800'
                  loading='lazy'
                />
              </div>
              <div className='space-y-8 lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8 lg:space-y-0'>
                <div className='order-first lg:flex lg:flex-none lg:justify-end lg:self-end'>
                  <Image
                    src='/img/about/about-2.jpg'
                    alt='郑州瑞斯特耐有限公司'
                    className='w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover lg:aspect-[4/3] lg:w-[24rem]'
                    width='1200'
                    height='800'
                    loading='lazy'
                  />
                </div>
                <div className='flex flex-auto justify-end lg:flex-none'>
                  <Image
                    src='/img/about/about-4.jpg'
                    alt='郑州瑞斯特耐有限公司'
                    className='rounded-2xl bg-gray-50 object-cover lg:aspect-[7/5] lg:w-[37rem] lg:max-w-none lg:flex-none'
                    width='1200'
                    height='800'
                    loading='lazy'
                  />
                </div>
                <div className='lg:w-auto lg:flex-none'>
                  <Image
                    src='/img/about/about-3.jpg'
                    alt='郑州瑞斯特耐有限公司'
                    className='rounded-2xl bg-gray-50 object-cover lg:aspect-[4/3] lg:w-[24rem] lg:max-w-none'
                    width='1200'
                    height='800'
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto my-20 max-w-screen-xl px-6 lg:my-32 lg:px-8'>
        <div>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            公司历史
          </h2>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            公司历经二十余年发展，已经成为集耐材咨询、研发、生产、销售和筑炉施工为一体的现代化企业。与中钢集团洛阳耐火材料研究院、河南科技大学、武汉科技大学等科研机构长期合作，
            根据《耐火材料标准汇编》不断调整产品结构、积极推动技术革新和成果转换。针对不同客户的不同工况条件进行个性化定制，为国内各大焦化、铝镁、碳素、石化、钢铁、铸造、建材等高温
            工业提供高温定型、不定型制品耐材。为客户提供强有力的技术支持，保证产品质量和企业信誉。
          </p>
        </div>
        <div className='mt-20 lg:mt-32'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            服务客户
          </h2>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            我公司产品广泛应用于钢铁、水泥、有色金属、玻璃、石化、陶瓷、焦化等行业。主要生产有陶瓷蛭石保温板、超轻纳米隔热砖、机制高铝隔热砖、莫来石质隔热砖、聚轻球隔热砖、硅质
            隔热砖、高强漂珠砖、粘土质隔热保温砖以及配套的不定型浇注料。产品畅销全国各地，并出又至海外多个国家
            (德国、意大利、奥地利、俄罗斯、乌兹别克斯坦、印度尼西亚、土耳其、日
            本、韩国等)，得到了海内外客户的一致认可。
          </p>
        </div>
      </div>
    </main>
  );
}
