// /api/contact.js (Vercel Serverless Function)
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name = '', email = '', company = '', message = '' } = req.body || {};
  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.TO_EMAIL || 'lucien@devio.co.za';
    const from = process.env.FROM_EMAIL || 'no-reply@yourdomain.com';

    await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `New inbound lead • ${name} (${company || 'No company'})`,
      text: `Name: ${name}
Email: ${email}
Company: ${company || '-'}

Message:
${message}`
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
}
