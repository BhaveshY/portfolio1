import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you can implement different email services:
    // 1. Formspree (free option) - replace YOUR_FORM_ID with your actual form ID
    // 2. EmailJS (free option with client-side sending)
    // 3. SendGrid, Nodemailer, etc. for server-side email sending
    
    // Option 1: Using Formspree (you need to create a form at formspree.io)
    // Replace YOUR_FORM_ID with your actual Formspree form ID
    const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';
    
    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      // If no Formspree endpoint is configured, simulate success for demo
      console.log('Contact form submission (demo mode):', { name, email, message });
      
      // For demo purposes, we'll just log and return success
      // In production, configure FORMSPREE_ENDPOINT environment variable
      return NextResponse.json(
        { message: 'Message sent successfully! (Demo mode - configure FORMSPREE_ENDPOINT for real sending)' },
        { status: 200 }
      );
    }
    
    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
      }),
    });

    if (!formspreeResponse.ok) {
      throw new Error('Failed to send email via Formspree');
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 