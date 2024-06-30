import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Inquiry <onboarding@resend.dev>',
      to: ['email4x.com@gmail.com'],
      subject: 'Inquiry',
      text: message,
      react: EmailTemplate({ email, name, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error }, { status: 500 });
  }
}
