'use client';

import { Fragment, useState, useRef, MouseEvent } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const products = [
  {
    name: '高强漂珠砖',
    description:
      '高强漂珠砖是一种具备轻质、高耐火度、优异保温、抗热震和耐腐蚀等特点的高温耐火保温材料。',
    img: '/img/products/gerezhuan.jpg',
    href: '/products',
  },
  {
    name: '莫来石保温砖',
    description:
      '莫来石保温砖是一种高性能的耐火保温材料，广泛应用于高温工业炉窑的内衬。',
    img: '/img/products/jizhimolaishizhuan.jpg',
    href: '/products',
  },
  {
    name: '高铝聚轻砖',
    description:
      '高铝聚轻砖是一种具备高耐火度、轻质、优良保温、高强度、抗热震和耐腐蚀等特点的高温耐火保温材料。',
    img: '/img/products/juqingzhuan.jpg',
    href: '/products',
  },
  { name: '高强漂珠砖', description: '', img: '', href: '/products' },
  { name: '高强高铝保温砖', description: '', img: '', href: '/products' },
  { name: '蛭石保温砖', description: '', img: '', href: '/products' },
  { name: '陶瓷蛭石隔热板', description: '', img: '', href: '/products' },
  { name: '微孔高强低导热砖', description: '', img: '', href: '/products' },
  { name: '035超轻绝热保温砖', description: '', img: '', href: '/products' },
  { name: '绝缘发泡转', description: '', img: '', href: '/products' },
  { name: '防渗砖', description: '', img: '', href: '/products' },
];
const callsToAction = [
  { name: '联系我们', href: '/contact', icon: EnvelopeIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [openState, setOpenState] = useState(false);

  let timeout: number | undefined;
  const timeoutDuration = 100;

  const toggleMenu = (open: boolean) => {
    setOpenState((openState) => !openState);
    buttonRef.current?.click();
  };

  const onHover = (e: MouseEvent<HTMLDivElement>, open: boolean, action: string) => {
    if (open && openState && e.target === buttonRef?.current && action === 'onMouseEnter') {
      clearTimeout(timeout);
      return
    }

    if (open && openState && e.target === panelRef?.current && action === 'onMouseEnter') {
      clearTimeout(timeout);
      return
    }

    if (
      (!open && !openState && action === 'onMouseEnter') ||
      (open && openState && action === 'onMouseLeave')
    ) {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => toggleMenu(open), timeoutDuration);
    }
  };

  return (
    <header className='relative isolate z-10 bg-white'>
      <nav
        className='mx-auto flex h-20 max-w-screen-xl items-center justify-between px-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>瑞斯特耐</span>
            <Image
              className='h-8 w-auto outline-none'
              src='/img/logo.png'
              width='389'
              height='96'
              alt='瑞斯特耐'
              priority
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:h-full lg:items-center lg:gap-x-12'>
          <a href='/' className='text-sm font-semibold leading-6 text-gray-900'>
            首页
          </a>

          <Popover className='h-full'>
            {({ open }) => (
              <div
                onMouseEnter={(e) => onHover(e, open, 'onMouseEnter')}
                onMouseLeave={(e) => onHover(e, open, 'onMouseLeave')}
                className='flex h-full flex-col'
              >
                <Popover.Button
                  ref={buttonRef}
                  className='flex h-full items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none'
                >
                  产品中心
                  <ChevronDownIcon
                    className='h-5 w-5 flex-none text-gray-400'
                    aria-hidden='true'
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel
                    focus={true}
                    className='absolute inset-x-0 top-full -z-10 bg-white shadow-lg ring-1 ring-gray-900/5'
                  >
                    <div ref={panelRef} className='mx-auto grid max-w-screen-xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8'>
                      {products.slice(0, 3).map((item) => (
                        <div
                          key={item.name}
                          className='group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50'
                        >
                          <figure>
                            <Image
                              className='h-11 w-auto rounded'
                              src={item.img}
                              width={600}
                              height={394}
                              alt={item.name}
                              loading='lazy'
                            />
                          </figure>
                          <a
                            href={item.href}
                            className='mt-6 block font-semibold text-gray-900 outline-none'
                          >
                            {item.name}
                            <span className='absolute inset-0' />
                          </a>
                          <p className='mt-1 text-gray-600'>
                            {item.description}
                          </p>
                        </div>
                      ))}
                      <a
                        href='/products'
                        className='flex items-center justify-center rounded-lg p-6 text-lg font-semibold leading-6 text-slate-500 hover:bg-gray-50 hover:text-slate-600'
                      >
                        更多产品{' >>'}
                      </a>
                    </div>
                    <div className='bg-gray-50'>
                      <div className='mx-auto max-w-screen-xl'>
                        <div className='grid grid-cols-1 divide-x divide-gray-900/5 border-x border-gray-900/5'>
                          {callsToAction.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                            >
                              <item.icon
                                className='h-5 w-5 flex-none text-gray-400'
                                aria-hidden='true'
                              />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>

          {/* <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            解决方案
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            客户案例
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            服务支持
          </a> */}
          <a
            href='/contact'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            联系我们
          </a>
          <a
            href='/about'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            关于我们
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>瑞斯特耐</span>
              <Image
                className='h-8 w-auto outline-none'
                src='/img/logo.png'
                width='389'
                height='96'
                alt='瑞斯特耐'
                priority
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  首页
                </a>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        产品中心
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/* <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  解决方案
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  客户案例
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  服务支持
                </a> */}
                <a
                  href='/contact'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  联系我们
                </a>
                <a
                  href='/about'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  关于我们
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
