const features = [
  {
    name: '高铝质隔热砖',
    description:
      '可广泛应用于冶金、陶瓷、石油、化工等行业各种工业窑炉内衬不受溶液侵蚀)及保温层，是一种理想的节能产品。',
    img: '/img/products/gerezhuan.jpg',
  },
  {
    name: '机制微孔莫来石砖',
    description:
      '新型微孔莫来石砖相比传统保温隔热砖，具有气孔率更高、孔径更小、导热性能更低、强度更高、重烧稳定的优点。同时还具有抗还原气氛、抗碱蒸汽的特点。',
    img: '/img/products/jizhimolaishizhuan.jpg',
  },
  {
    name: '聚轻砖',
    description: 'Senior Developer',
    img: '/img/products/juqingzhuan.jpg',
  },
  {
    name: '陶瓷蛭石保温板',
    description: 'Senior Developer',
    img: '/img/products/gerezhuan.jpg',
  },
];

export default function FeatureBlock() {
  return (
    <div className='bg-white py-5 md:py-12 lg:py-8'>
      <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            我们的产品
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            针对不同客户的
            不同工况条件进行个性化定制，为国内各大焦化、铝镁、碳素、石化、钢铁、铸造、建材等高温
            工业提供高温定型、不定型制品耐材。
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <a
              href='/products'
              className='rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
            >
              更多产品
            </a>
          </div>
        </div>
        <ul
          role='list'
          className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2'
        >
          {features.map((feature) => (
            <li key={feature.name}>
              <img
                className='aspect-[3/2] w-full rounded-2xl object-cover'
                src={feature.img}
                alt={feature.name}
              />
              <h3 className='mt-6 text-lg font-semibold leading-8 text-gray-900'>
                {feature.name}
              </h3>
              <p className='mt-4 text-base leading-7 text-gray-600'>
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
