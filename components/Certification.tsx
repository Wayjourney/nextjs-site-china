import Image from 'next/image';

const features = [
  { name: '质量管理体系认证证书', img: '/img/cert/1.jpg' },
  { name: '环境管理体系认证证书', img: '/img/cert/2.jpg' },
  { name: '职业健康安全管理体系认证证书', img: '/img/cert/3.jpg' },
];

export default function Certification() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-screen-xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            行业认证
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            产品畅销全国各地，并出又至海外多个国家
            (德国、意大利、奥地利、俄罗斯、乌兹别克斯坦、印度尼西亚、土耳其、日本、韩国等)，得到了海内外客户的一致认可。
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <ul className='mx-auto grid max-w-xl grid-cols-1 gap-y-12 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <li key={feature.name} className='flex justify-center'>
                <Image
                  className='mx-auto w-4/5 rounded-lg border-[10px] border-white object-cover shadow-card'
                  src={feature.img}
                  width='384'
                  height='542'
                  alt={feature.name}
                  loading='lazy'
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
