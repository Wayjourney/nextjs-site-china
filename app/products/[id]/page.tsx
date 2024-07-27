import Image from 'next/image';
import Link from 'next/link';
import ProductList from '@/lib/data';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = ProductList.find((item) => item.id === Number(id));

  return {
    title: '郑州瑞斯特耐有限公司',
    description: `${product!.name} | 郑州瑞斯特耐有限公司`,
  };
}

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = ProductList.find((item) => item.id === Number(id));

  const pages = [
    { name: '产品列表', href: '/products', current: false },
    { name: product!.name, href: product!.href, current: true },
  ];

  return (
    <main className='mx-auto max-w-screen-xl px-6 pb-24 pt-6 lg:px-8'>
      <Breadcrumb pages={pages} />
      <div className='lg:grid lg:auto-rows-max lg:grid-cols-12 lg:gap-x-8'>
        <div className='mb-6 lg:col-span-5 lg:col-start-8 lg:mb-0'>
          <h1 className='text-2xl font-bold text-gray-900'>{product?.name}</h1>
        </div>
        <div className='lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0'>
          <Image
            className='w-full rounded object-cover'
            src={product?.image || '/img/products/gerezhuan.jpg'}
            width='600'
            height='394'
            alt={product?.name || ''}
            priority
          />
        </div>

        <div className='mt-8 lg:col-span-5 lg:col-start-8'>
          <div>
            <Link
              href='/contact'
              className='mb-8 flex w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 font-semibold text-white shadow transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-400'
            >
              联系我们
            </Link>
          </div>
          <div className='border-t border-gray-100 pt-8'>
            <h2 className='text-xl font-semibold leading-none text-gray-900'>
              产品介绍
            </h2>
            {product && (
              <div className='mt-4 text-base text-gray-500 space-y-4'>
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
