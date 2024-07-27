import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import InquiryForm from '@/components/InquiryForm';

export default function Contact() {
  return (
    <div
      className='relative isolate bg-white'
      itemScope
      itemType='https://schema.org/ContactPage'
    >
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div
            className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'
            itemScope
            itemType='https://schema.org/LocalBusiness'
          >
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
            <h2
              itemProp='name'
              className='text-3xl font-bold tracking-tight text-gray-900'
            >
              联系我们
            </h2>
            <p
              itemProp='description'
              className='mt-6 text-lg leading-8 text-gray-600'
            >
              郑州瑞斯特耐有限公司是一家专注于生产高性能耐火材料的企业。我们致力于为各行业提供优质的耐火产品和专业的技术支持，确保客户在高温环境中获得最佳的性能和可靠性。无论您有任何问题或需求，我们的团队随时准备为您提供帮助和解决方案。请通过以下方式联系我们，期待与您的合作。
            </p>
            <dl
              itemScope
              itemType='https://schema.org/PostalAddress'
              className='mt-10 space-y-4 text-base leading-7 text-gray-600'
            >
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>公司地址</span>
                  <BuildingOffice2Icon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd itemProp='streetAddress'>河南省新密市来集镇李堂村一组</dd>
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
                  <a
                    itemProp='telephone'
                    className='hover:text-gray-900'
                    href='tel:+86 13938281286'
                  >
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
                    itemProp='email'
                    className='hover:text-gray-900'
                    href='mailto:zzrstn@qq.com'
                  >
                    zzrstn@qq.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <InquiryForm />
      </div>
    </div>
  );
}
