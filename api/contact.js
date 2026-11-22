import { Resend } from 'resend'

const cleanText = (value, maxLength, singleLine = false) => {
  if (typeof value !== 'string') return ''
  const normalized = value
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
  return (singleLine ? normalized.replace(/[\n\t]/g, ' ') : normalized).trim().slice(0, maxLength)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ error: 'Invalid request' })
    }
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ error: 'Invalid request' })
  }

  if (cleanText(body.website, 200, true)) return res.status(200).json({ ok: true })

  const name = cleanText(body.name, 120, true)
  const email = cleanText(body.email, 254, true)
  const company = cleanText(body.company, 160, true)
  const message = cleanText(body.message, 5000)
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  if (!name || !emailIsValid || message.length < 10 || body.consent !== true) {
    return res.status(400).json({ error: 'Please provide valid contact details, a message and consent.' })
  }

  const recipient = process.env.TO_EMAIL || 'lucien.devoux@gmail.com'
  const configuredFrom = process.env.FROM_EMAIL
  const domain = (process.env.RESEND_EMAIL_DOMAIN || '').trim()
  const safeDomain = /^[a-z0-9.-]+$/i.test(domain) ? domain : ''
  const from = configuredFrom || (safeDomain ? `Taras AI <hello@${safeDomain}>` : '')

  if (!process.env.RESEND_API_KEY || !from || /[\r\n]/.test(recipient)) {
    return res.status(503).json({ error: 'Email delivery is not configured.' })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from,
      to: recipient,
      reply_to: email,
      subject: `New Taras AI enquiry — ${name}${company ? ` (${company})` : ''}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${company || 'Not provided'}\n\nEnquiry:\n${message}`,
    })

    if (error) {
      console.error('Resend could not deliver the contact enquiry.')
      return res.status(502).json({ error: 'The enquiry could not be delivered.' })
    }

    return res.status(200).json({ ok: true })
  } catch {
    console.error('Contact enquiry delivery failed.')
    return res.status(502).json({ error: 'The enquiry could not be delivered.' })
  }
}
