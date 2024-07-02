import Image from 'next/image';
import type { Metadata } from 'next';
import ProductList from '@/lib/data';

export const metadata: Metadata = {
  title: '郑州瑞斯特耐有限公司',
  description: '耐材产品中心，助力高温行业节能降耗 | 郑州瑞斯特耐有限公司',
};

export default function Products() {
  return (
    <div className='mx-auto my-20 max-w-screen-xl px-6 lg:px-8'>
      <h1 className='mb-6 text-3xl font-bold text-slate-800'>产品列表</h1>
      <div className='grid grid-cols-1 gap-x-5 gap-y-6 sm:gap-y-10 sm:mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {ProductList.map((item, index) => (
          <div
            key={index}
            className='bg-white shadow-card pt-3 px-3 pb-4 rounded-xl'
          >
            <div className='aspect-[3/2] overflow-hidden rounded-xl bg-gray-200'>
              <Image
                src='/img/products/gerezhuan.jpg'
                width={600}
                height={394}
                alt={item.name}
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='pt-4'>
              <h3 className='text-center text-base font-medium text-slate-700'>
                <a href='#'>
                  <span aria-hidden='true' className='absolute inset-0'></span>
                  {item.name}
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
