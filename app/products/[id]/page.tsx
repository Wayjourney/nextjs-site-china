import Image from 'next/image';
import Link from 'next/link';
import ProductList from '@/lib/data';

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = ProductList.find((item) => item.id === Number(id));

  return (
    <main className='mx-auto max-w-screen-xl px-6 pb-24 pt-14 lg:px-8'>
      <div className='lg:grid lg:auto-rows-max lg:grid-cols-12 lg:gap-x-8'>
        <div className='mb-6 lg:col-span-5 lg:col-start-8 lg:mb-0'>
          <h1 className='text-2xl font-bold text-gray-900'>{product?.name}</h1>
        </div>
        <div className='lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0'>
          <Image
            className='w-full rounded object-cover'
            src='/img/products/gerezhuan.jpg'
            width='600'
            height='394'
            alt={product?.name || ''}
          />
        </div>

        <div className='mt-8 lg:col-span-5 lg:col-start-8'>
          <div>
            <Link
              href='/contact'
              className='mb-8 flex w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 font-semibold text-white shadow transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-400'
              scroll={true}
            >
              联系我们
            </Link>
          </div>
          <div className='border-t border-gray-100 pt-8'>
            <h2 className='text-xl font-semibold leading-none text-gray-900'>
              产品信息
            </h2>
            {product && (
              <div className='mt-4 text-base text-gray-500'>
                {product.description.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
