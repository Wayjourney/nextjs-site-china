'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { isValidEmail } from '@/lib/utils';

export default function InquiryForm() {
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
    <form
      onSubmit={handleSubmit}
      className='space-y-8 px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
    >
      <div>
        <label className='block text-slate-600'>
          姓名:<span className='text-sm text-slate-400'>（必填项）</span>
        </label>
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
        <label className='block text-slate-600'>
          邮箱:<span className='text-sm text-slate-400'>（必填项）</span>
        </label>
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
        <label className='block text-slate-600'>
          内容:<span className='text-sm text-slate-400'>（必填项）</span>
        </label>
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
  );
}
