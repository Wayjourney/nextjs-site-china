import * as React from 'react';
import {
  Tailwind,
  Heading,
  Img,
  Section,
  Text,
  Head,
  Body,
  Container,
  Row,
  Column,
} from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  name,
  message,
}) => (
  <Tailwind>
    <Head />
    <Body className='mx-auto my-auto bg-white px-2 font-sans'>
      <Container className='mx-auto bg-white'>
        <Section className='my-[40px]' style={content}>
          <Row className='rounded-t-lg bg-slate-100 px-6 py-5 lg:px-8'>
            <Img
              className='mx-auto py-5'
              src='https://zzreass.com/img/logo.png'
              width='194'
              height='48'
              alt='瑞斯特耐'
            />
          </Row>

          <Row className='my-4'>
            <Text className='m-0 ml-4 inline-block text-sm font-medium leading-6 text-gray-500' style={title}>
              姓名
            </Text>
            <Text className='m-0 ml-4 mt-2 text-base leading-6 text-gray-800'>
              {name}
            </Text>

            <Text className='m-0 ml-4 mt-10 inline-block text-sm font-medium leading-6 text-gray-500' style={title}>
              邮箱
            </Text>
            <Text className='m-0 mt-2 px-4 text-base leading-6 text-gray-800'>
              {email}
            </Text>

            <Text className='m-0 ml-4 mt-10 inline-block text-sm font-medium leading-6 text-gray-500' style={title}>
              内容
            </Text>
            <Text className='m-0 mt-2 px-4 text-base leading-6 text-gray-800'>
              {message}
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Tailwind>
);

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: 'rgba(0, 0, 0, 0) 0px 0px, rgba(0, 0, 0, 0) 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px'
};

const title = {
    borderBottomWidth: '1px',
    borderColor: 'rgb(107,114,128)'
}