import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Prescott Gutter Guards <noreply@prescottgutterguards.com>',
      to: 'prescottgutterguards@gmail.com',
      subject: `New Estimate Request from ${name}`,
      html: `
        <h2>New Estimate Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Submitted from PrescottGutterGuards.com</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
