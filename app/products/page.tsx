import Image from 'next/image';
import ProductList from './data';

export default function Products() {
  return (
    <div className='mx-auto my-20 max-w-screen-xl px-6 lg:px-8'>
      <h1 className='my-8 text-2xl font-bold text-slate-800'>产品列表</h1>
      <div className='grid grid-cols-2 border-l border-t bg-white sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
        {ProductList.map((item, index) => (
          <div key={index} className='relative border-b border-r p-4 sm:p-6'>
            <div className='aspect-[3/2] overflow-hidden rounded-lg bg-gray-200'>
              <Image
                src='/img/products/gerezhuan.jpg'
                width={600}
                height={394}
                alt={item.name}
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='pt-4'>
              <h3 className='text-center text-sm font-medium text-gray-900'>
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
