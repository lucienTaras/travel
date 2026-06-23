import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './components/ui/button'

const Section = ({ id, children, className = '' }) => 
  <section id={id} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-brand-ivory to-white text-brand-ink font-sans'>
      {/* Header */}
      <nav className='sticky top-0 z-50 backdrop-blur bg-white/70 border-b'>
        <Section className='flex items-center justify-between py-4'>
          <Link to='/' className='flex items-center gap-3 hover:opacity-80'>
            <img src='/logo.png' alt='TARAS logo' className='h-9 w-9 rounded-2xl border border-[#A85C32]' />
            <span className='font-extrabold text-xl tracking-tight'>TARAS</span>
          </Link>
          <div className='flex items-center gap-3'>
            <Link to='/'><Button variant='outline' size='sm' className='rounded-2xl'>Back to home</Button></Link>
          </div>
        </Section>
      </nav>

      {/* Hero */}
      <Section className='pt-14 pb-10'>
        <h1 className='text-4xl md:text-5xl font-extrabold font-serif tracking-tight mb-4'>
          Privacy Policy
        </h1>
        <p className='text-lg text-slate-600'>
          Last updated: June 23, 2026
        </p>
      </Section>

      {/* Content */}
      <Section className='pb-20 space-y-10'>
        
        {/* 1. Introduction */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>1. Introduction</h2>
          <p className='text-slate-600 mb-4'>
            TARAS ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process your personal information in connection with our website, products, and services (collectively, the "Services").
          </p>
          <p className='text-slate-600'>
            Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>2. Information We Collect</h2>
          
          <h3 className='text-lg font-semibold mb-3 mt-6'>2.1 Information You Provide</h3>
          <p className='text-slate-600 mb-4'>
            When you contact us, submit inquiries, or use our Services, we may collect:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li>Name, email address, phone number, and company details</li>
            <li>Message content and communication records</li>
            <li>CRM data and business information you choose to share</li>
            <li>Payment and billing information (processed securely via third-party providers)</li>
            <li>Website usage data and preferences</li>
          </ul>

          <h3 className='text-lg font-semibold mb-3 mt-6'>2.2 Information Automatically Collected</h3>
          <p className='text-slate-600 mb-4'>
            We automatically collect certain information about your device and use of our Services:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li>IP address, browser type, and operating system</li>
            <li>Pages visited, time spent, and actions taken</li>
            <li>Referring/exit pages and click paths</li>
            <li>Cookies and similar tracking technologies (see Section 5)</li>
          </ul>

          <h3 className='text-lg font-semibold mb-3 mt-6'>2.3 Information from Third Parties</h3>
          <p className='text-slate-600'>
            We may receive information about you from business partners, service providers, publicly available sources, and data brokers, which we combine with information we hold.
          </p>
        </div>

        {/* 3. How We Use Your Information */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>3. How We Use Your Information</h2>
          <p className='text-slate-600 mb-4'>
            We use your information for the following purposes:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li>Providing, maintaining, and improving our Services</li>
            <li>Processing inquiries, requests, and transactions</li>
            <li>Sending communications (newsletters, product updates, marketing)</li>
            <li>Personalizing your experience and content recommendations</li>
            <li>Analyzing usage patterns and improving our platform</li>
            <li>Complying with legal obligations and resolving disputes</li>
            <li>Fraud detection and security enhancement</li>
            <li>Business intelligence and market research</li>
          </ul>
        </div>

        {/* 4. Legal Basis for Processing */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>4. Legal Basis for Processing</h2>
          <p className='text-slate-600 mb-4'>
            Our processing of your personal information is based on:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li><strong>Contract:</strong> Performance of services you request</li>
            <li><strong>Consent:</strong> When you opt-in to marketing or optional features</li>
            <li><strong>Legitimate Interest:</strong> Business analytics, fraud prevention, platform improvement</li>
            <li><strong>Legal Obligation:</strong> Compliance with applicable laws (POPIA, GDPR, etc.)</li>
          </ul>
        </div>

        {/* 5. Sharing Your Information */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>5. Sharing Your Information</h2>
          <p className='text-slate-600 mb-4'>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li><strong>Service Providers:</strong> Cloud hosting, email, analytics, payment processors</li>
            <li><strong>Business Partners:</strong> To provide integrated services you request</li>
            <li><strong>Legal Requirements:</strong> When required by law or court order</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
          </ul>
        </div>

        {/* 6. Cookies & Tracking Technologies */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>6. Cookies & Tracking Technologies</h2>
          <p className='text-slate-600 mb-4'>
            We use cookies and similar technologies to enhance your experience:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li><strong>Essential:</strong> Required for platform functionality</li>
            <li><strong>Analytics:</strong> Understand how you use our Services (opt-in)</li>
            <li><strong>Marketing:</strong> Personalize ads and measure campaign effectiveness (opt-in)</li>
          </ul>
          <p className='text-slate-600'>
            You can control cookies via browser settings. Disabling essential cookies may affect functionality.
          </p>
        </div>

        {/* 7. Data Retention */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>7. Data Retention</h2>
          <p className='text-slate-600 mb-4'>
            We retain your information as follows:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li><strong>Account Data:</strong> For the duration of your account + 7 years for compliance</li>
            <li><strong>Marketing Communications:</strong> Until you unsubscribe</li>
            <li><strong>Analytics:</strong> Aggregated, non-identifying data is retained for analytics</li>
            <li><strong>Legal Obligations:</strong> As required by law</li>
          </ul>
        </div>

        {/* 8. Your Rights */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>8. Your Rights</h2>
          <p className='text-slate-600 mb-4'>
            Depending on your location, you may have the following rights:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request removal of your data (subject to legal obligations)</li>
            <li><strong>Portability:</strong> Receive data in a portable format</li>
            <li><strong>Withdraw Consent:</strong> Opt-out of marketing and non-essential processing</li>
            <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
          </ul>
          <p className='text-slate-600 mt-4'>
            To exercise these rights, contact us at <a href='mailto:privacy@taras.ai' className='text-[#A85C32] hover:underline'>privacy@taras.ai</a> with "Data Subject Request" in the subject line.
          </p>
        </div>

        {/* 9. Data Security */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>9. Data Security</h2>
          <p className='text-slate-600 mb-4'>
            We implement industry-standard security measures to protect your data:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li>Encryption in transit (TLS/SSL) and at rest</li>
            <li>Access controls and authentication protocols</li>
            <li>Regular security audits and penetration testing</li>
            <li>Employee training and data handling policies</li>
          </ul>
          <p className='text-slate-600'>
            While we take security seriously, no system is 100% secure. We are not liable for unauthorized access beyond our reasonable control.
          </p>
        </div>

        {/* 10. International Transfers */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>10. International Data Transfers</h2>
          <p className='text-slate-600 mb-4'>
            Your information may be processed in countries outside your jurisdiction, including South Africa, the EU, and the US. We ensure adequate safeguards through:
          </p>
          <ul className='list-disc list-inside space-y-2 text-slate-600 mb-4 ml-2'>
            <li>Standard contractual clauses (SCCs) with service providers</li>
            <li>Adequacy decisions where applicable</li>
            <li>Your explicit consent for transfers</li>
          </ul>
        </div>

        {/* 11. Children's Privacy */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>11. Children's Privacy</h2>
          <p className='text-slate-600'>
            Our Services are not intended for individuals under 13 years old. We do not knowingly collect information from children. If we become aware of such collection, we will delete the data immediately and notify you.
          </p>
        </div>

        {/* 12. POPIA & GDPR Compliance */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>12. POPIA & GDPR Compliance</h2>
          <p className='text-slate-600 mb-4'>
            <strong>POPIA (South Africa):</strong> We comply with the Protection of Personal Information Act by implementing data minimization, securing consent, and honoring subject rights.
          </p>
          <p className='text-slate-600'>
            <strong>GDPR (EU/EEA):</strong> We comply with the General Data Protection Regulation through lawful basis determination, Privacy by Design, Data Protection Impact Assessments, and timely breach notification.
          </p>
        </div>

        {/* 13. Third-Party Links */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>13. Third-Party Links</h2>
          <p className='text-slate-600'>
            Our Services may contain links to third-party websites and services. We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
          </p>
        </div>

        {/* 14. Contact Us */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>14. Contact Us</h2>
          <p className='text-slate-600 mb-4'>
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact:
          </p>
          <div className='bg-slate-50 rounded-2xl p-6 border'>
            <p className='font-semibold mb-2'>TARAS Data Protection</p>
            <p className='text-slate-600'>Email: <a href='mailto:privacy@taras.ai' className='text-[#A85C32] hover:underline'>privacy@taras.ai</a></p>
            <p className='text-slate-600'>Web: <a href='https://taras.ai' className='text-[#A85C32] hover:underline'>https://taras.ai</a></p>
          </div>
        </div>

        {/* 15. Changes to Policy */}
        <div>
          <h2 className='text-2xl font-bold font-serif mb-4'>15. Changes to This Policy</h2>
          <p className='text-slate-600 mb-4'>
            We may update this Privacy Policy periodically. We will notify you of material changes by email or by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of the Services after such notice constitutes acceptance of the updated Privacy Policy.
          </p>
        </div>

      </Section>

      {/* Footer */}
      <footer className='border-t bg-white/60'>
        <Section className='py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600'>
          <div>© {new Date().getFullYear()} TARAS. All rights reserved.</div>
          <div className='flex gap-6'>
            <Link to='/privacy' className='hover:text-[#A85C32]'>Privacy</Link>
            <a href='#' className='hover:text-[#A85C32]'>Terms</a>
            <a href='#' className='hover:text-[#A85C32]'>Security</a>
          </div>
        </Section>
      </footer>
    </div>
  )
}
