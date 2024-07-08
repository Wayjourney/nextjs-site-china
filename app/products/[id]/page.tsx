import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/20/solid';
import ProductList from '@/lib/data';

export async function generateMetadata({ params: { id }, }: {
  params: { id: string };
}) {
  const product = ProductList.find((item) => item.id === Number(id));

  return {
    title: '郑州瑞斯特耐有限公司',
    description: `${product!.name} | 郑州瑞斯特耐有限公司`,
  }
}

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = ProductList.find((item) => item.id === Number(id));
  const pages = [
    { name: '产品列表', href: '/products', current: false },
    { name: product?.name, href: product?.href, current: true },
  ];

  return (
    <main className='mx-auto max-w-screen-xl px-6 pb-24 pt-6 lg:px-8'>
      <nav aria-label='Breadcrumb' className='mb-5 flex py-5 lg:mb-0'>
        <ol role='list' className='flex items-center space-x-4'>
          <li>
            <div>
              <Link href='/' className='text-gray-400 hover:text-gray-500'>
                <HomeIcon
                  aria-hidden='true'
                  className='h-5 w-5 flex-shrink-0'
                />
                <span className='sr-only'>Home</span>
              </Link>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className='flex items-center'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                  className='h-5 w-5 flex-shrink-0 text-gray-300'
                >
                  <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                </svg>
                {page.current ? (
                  <span className='ml-4 text-sm font-medium text-gray-700'>
                    {page.name}
                  </span>
                ) : (
                  <Link
                    href={page.href!}
                    aria-current={page.current ? 'page' : undefined}
                    className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                    scroll={false}
                  >
                    {page.name}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
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
