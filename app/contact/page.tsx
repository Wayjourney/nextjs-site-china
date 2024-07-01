'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { isValidEmail } from '@/lib/utils';
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors = { ...newErrors, name: '名字不能为空' };
    }

    if (!formData.email.trim()) {
      newErrors = { ...newErrors, email: '邮箱不能为空' };
    } else if (!isValidEmail(formData.email)) {
      newErrors = { ...newErrors, email: '邮箱格式无效' };
    }

    if (!formData.message.trim()) {
      newErrors = { ...newErrors, message: '内容不能为空' };
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    setLoading(true);

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('信息发送成功！我们会尽快联系您。');
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    } else {
      alert('发送失败！我们会尽快排查问题，请选择其他联系方式。');
      setLoading(false);
    }
  };
  return (
    <div className='relative isolate bg-white'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2'>
              <svg
                className='absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                    width={200}
                    height={200}
                    x='100%'
                    y={-1}
                    patternUnits='userSpaceOnUse'
                  >
                    <path d='M130 200V.5M.5 .5H200' fill='none' />
                  </pattern>
                </defs>
                <rect width='100%' height='100%' strokeWidth={0} fill='white' />
                <svg x='100%' y={-1} className='overflow-visible fill-gray-50'>
                  <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                </svg>
                <rect
                  width='100%'
                  height='100%'
                  strokeWidth={0}
                  fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
                />
              </svg>
            </div>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
              联系我们
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              郑州瑞斯特耐有限公司是一家专注于生产高性能耐火材料的企业。我们致力于为各行业提供优质的耐火产品和专业的技术支持，确保客户在高温环境中获得最佳的性能和可靠性。无论您有任何问题或需求，我们的团队随时准备为您提供帮助和解决方案。请通过以下方式联系我们，期待与您的合作。
            </p>
            <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>公司地址</span>
                  <BuildingOffice2Icon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>河南省新密市来集镇李堂村一组</dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>联系电话</span>
                  <PhoneIcon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  <a className='hover:text-gray-900' href='tel:+86 13938281286'>
                    +86 13938281286
                  </a>
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>公司邮箱</span>
                  <EnvelopeIcon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  <a
                    className='hover:text-gray-900'
                    href='mailto:hello@example.com'
                  >
                    zzrstn@qq.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className='space-y-8 px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
        >
          <div>
            <label className='block text-slate-600'>姓名:</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full border p-2 text-slate-600 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
            />
            {errors.name && (
              <p className='mt-1 text-sm text-red-500'>{errors.name}</p>
            )}
          </div>
          <div>
            <label className='block text-slate-600'>邮箱:</label>
            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full border p-2 text-slate-600 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
            )}
          </div>
          <div>
            <label className='block text-slate-600'>内容:</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full border p-2 text-slate-600 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              rows={5}
            />
            {errors.message && (
              <p className='mt-1 text-sm text-red-500'>{errors.message}</p>
            )}
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className={classNames(
                'flex w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 font-semibold text-white shadow transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-400',
                {
                  'cursor-not-allowed': loading,
                }
              )}
            >
              {loading && (
                <svg
                  className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    stroke-width='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              )}
              发送
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
