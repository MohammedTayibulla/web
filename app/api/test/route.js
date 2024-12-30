import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handle GET requests
export async function GET() {
  return NextResponse.json({ message: 'Hello from the custom folder!' });
}


// Handle POST requests
export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const { from, subject, message } = body;

    if (!from || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, message' },
        { status: 400 }
      );
    }

    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., Gmail; you can use other services like Outlook
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Send the email
    const mailOptions = {
      from:process.env.EMAIL_USER, // Sender address
      to: from, // Recipient address
      subject, // Subject line
      text: message, // Plain text body
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}