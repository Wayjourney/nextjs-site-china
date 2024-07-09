'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/20/solid';

function Breadcrumb({
  pages,
}: {
  pages: { name: string; href: string; current: boolean }[];
}) {
  const router = useRouter();

  return (
    <nav aria-label='Breadcrumb' className='mb-5 flex py-5 lg:mb-0'>
      <ol role='list' className='flex items-center space-x-4'>
        <li>
          <div>
            <Link href='/' className='text-gray-400 hover:text-gray-500'>
              <HomeIcon aria-hidden='true' className='h-5 w-5 flex-shrink-0' />
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
  );
}

export default Breadcrumb;
