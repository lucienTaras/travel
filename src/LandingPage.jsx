import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input, Textarea } from '@/components/ui/input'

const KPI_CARDS=[{kpi:'24/7',label:'lead capture & answers'},{kpi:'30-50%',label:'faster response time'},{kpi:'10-20%',label:'uplift in cross-sell'}]
const PRICING_TIERS=[
 {name:'Starter',price:'$1,000/mo',setup:'$3,000 setup',points:['Website/WhatsApp bot','FAQ automation','Lead capture to email','Monthly performance review'],cta:'Start pilot'},
 {name:'Growth',price:'$1,500/mo',setup:'$3,000 setup',points:['Itinerary generator','CRM integration','Sentiment dashboard','Bi-weekly optimization'],cta:'Scale up',featured:true},
 {name:'Pro',price:'$2,500/mo',setup:'$5,000 setup',points:['Predictive demand & pricing','Custom workflows','SLA & training','Quarterly strategy'],cta:'Talk to sales'}
]
const CASE_STUDIES=[
 {title:'Boutique Safari Operator',quote:'Our response time dropped by half and we captured 37% more leads after hours.',author:'GM, Kruger-based Operator'},
 {title:'City Hotel Group',quote:'The itinerary assistant became our top-performing sales channel within 60 days.',author:'Head of Sales'},
 {title:'DMC in the Indian Ocean',quote:'Forecasting helped us price peak weeks confidently — revenue up 12% YoY.',author:'Commercial Director'}
]

const Section=({id,children,className=''})=> <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>

export default function LandingPage(){
  const [form,setForm]=React.useState({name:'',email:'',company:'',message:'',website:''})
  const [submitting,setSubmitting]=React.useState(false)
  const [result,setResult]=React.useState(null)
  const reduceMotion=useReducedMotion()
  const handleChange=e=>setForm({...form,[e.target.name]:e.target.value})
 const handleSubmit = async (e) => {
  e.preventDefault();
  if (form.website) return;
  setSubmitting(true);
  setResult(null);
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        message: form.message.trim(),
      }),
    });
    if (!res.ok) throw new Error();
    setResult({ ok: true, msg: "Thanks! We’ll get back to you within 1 business day." });
    setForm({ name: '', email: '', company: '', message: '', website: '' });
  } catch (e) {
    setResult({ ok: false, msg: "Something went wrong. Please email lucien@devio.co.za." });
  } finally {
    setSubmitting(false);
  }
};


  return (<div className='min-h-screen bg-gradient-to-b from-brand-ivory to-white text-brand-ink font-sans'>
    <nav className='sticky top-0 z-50 backdrop-blur bg-white/70 border-b'>
      <Section className='flex items-center justify-between py-4'>
        <div className='flex items-center gap-3'>
          <img src='/logo.png' alt='TARAS logo' className='h-9 w-9 rounded-2xl border border-[#A85C32]' />
          <span className='font-extrabold text-xl tracking-tight'>TARAS</span>
        </div>
        <div className='hidden md:flex items-center gap-6 text-sm'>
          <a href='#services' className='hover:text-[#A85C32]'>Services</a>
          <a href='#pricing' className='hover:text-[#A85C32]'>Pricing</a>
          <a href='#case-studies' className='hover:text-[#A85C32]'>Case Studies</a>
          <a href='#faq' className='hover:text-[#A85C32]'>FAQ</a>
          <a href='https://calendar.app.google/9Lg9BzZy97jv3poHA' target='_blank' rel='noopener noreferrer'><Button size='sm'>Talk to Us</Button></a>
        </div>
      </Section>
    </nav>

    <Section className='pt-14 pb-10'>
      <div className='grid lg:grid-cols-2 gap-10 items-center'>
        <div>
          <motion.h1 initial={reduceMotion?false:{opacity:0,y:10}} animate={reduceMotion?{}:{opacity:1,y:0}} transition={{duration:0.5}} className='text-4xl md:text-5xl font-extrabold leading-tight font-serif tracking-tight'>
            Supercharge your travel agents with <span className='text-[#A85C32]'>AI</span>
          </motion.h1>
          <p className='mt-4 text-lg text-slate-600 max-w-xl'>We help travel agencies and tourism companies win more bookings, answer customers 24/7, and personalize every itinerary — without hiring a tech team.</p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <a href='https://calendar.app.google/9Lg9BzZy97jv3poHA' target='_blank' rel='noopener noreferrer'><Button size='lg' className='rounded-2xl'>Book a free consult</Button></a>
            <a href='#pricing'><Button size='lg' variant='outline' className='rounded-2xl'>See pricing</Button></a>
          </div>
          <div className='mt-6 flex items-center gap-4 text-sm text-slate-600'>
            <div className='flex items-center gap-2'>Go live in days</div>
            <div className='flex items-center gap-2'>POPIA/GDPR mindful</div>
            <div className='flex items-center gap-2'>ROI-first approach</div>
          </div>
        </div>
        <div className='relative'>
          <div className='rounded-3xl p-6 bg-white border shadow-sm'>
            <div className='grid gap-4'>
              <Card className='rounded-2xl'>
                <CardHeader className='pb-2'><CardTitle className='text-base'>Chatbot in action</CardTitle><CardDescription>“Plan a 5-day family trip to Paris under $2,000.”</CardDescription></CardHeader>
                <CardContent><div className='rounded-xl p-4 bg-slate-50 text-sm'><p className='font-medium'>AI Assistant</p><p className='text-slate-600'>Here are 2 flight options, 3 family-friendly hotels, and a day-by-day plan.</p></div></CardContent>
              </Card>
              <Card className='rounded-2xl'>
                <CardHeader className='pb-2'><CardTitle className='text-base'>Forecast snapshot</CardTitle><CardDescription>Demand & revenue outlook</CardDescription></CardHeader>
                <CardContent><div className='grid grid-cols-3 gap-3 text-center text-xs'>
                  {[{label:'Cape Town (Dec)',value:'+18%'},{label:'Zanzibar (Aug)',value:'+12%'},{label:'Kruger (Jun)',value:'+9%'}].map(x=>(
                    <div key={x.label} className='rounded-xl border p-3'><div className='font-semibold'>{x.value}</div><div className='text-slate-600'>{x.label}</div></div>
                  ))}
                </div></CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className='py-6'><div className='grid sm:grid-cols-3 gap-4 text-center'>
      {KPI_CARDS.map(i=>(<div key={i.kpi} className='rounded-2xl border p-6 bg-white shadow-sm'><div className='text-3xl font-extrabold'>{i.kpi}</div><div className='text-slate-600'>{i.label}</div></div>))}
    </div></Section>

    <Section id='services' className='py-10'>
      <div className='grid lg:grid-cols-2 gap-10 items-start'>
        <div>
          <h2 className='text-3xl font-bold font-serif tracking-tight'>What we deliver</h2>
          <p className='mt-3 text-slate-600 max-w-prose'>Practical AI that your team can use from day one. We integrate with your CRM, website, and messaging channels to automate busywork and elevate human agents.</p>
          <div className='mt-6 grid gap-6'>
            <div className='flex gap-4'><div className='shrink-0 rounded-2xl p-3 bg-[rgba(168,92,50,0.1)]' /><div><h4 className='font-semibold text-lg font-serif'>Smart Customer Engagement</h4><p className='text-slate-600'>Web/WhatsApp bots that answer FAQs, qualify leads, and generate itineraries 24/7.</p></div></div>
            <div className='flex gap-4'><div className='shrink-0 rounded-2xl p-3 bg-[rgba(168,92,50,0.1)]' /><div><h4 className='font-semibold text-lg font-serif'>Predictive Demand & Revenue</h4><p className='text-slate-600'>Forecast peaks, trending destinations, and likely spend.</p></div></div>
            <div className='flex gap-4'><div className='shrink-0 rounded-2xl p-3 bg-[rgba(168,92,50,0.1)]' /><div><h4 className='font-semibold text-lg font-serif'>Multilingual & Inclusive</h4><p className='text-slate-600'>Serve travelers in their language with culturally-aware suggestions.</p></div></div>
          </div>
        </div>
        <div className='grid gap-6'>
          <Card className='rounded-2xl'><CardHeader><CardTitle>How it works</CardTitle><CardDescription>From discovery to live in ~2 weeks</CardDescription></CardHeader>
            <CardContent className='grid gap-3 text-sm'>
              <div>1) Audit: We map journeys, FAQs, and data sources.</div>
              <div>2) Configure: Train the bot + dashboards on your offers & tone.</div>
              <div>3) Integrate: Connect CRM, forms, and messaging channels.</div>
              <div>4) Launch & coach: Monitor, fine-tune, and upskill agents.</div>
            </CardContent></Card>
          <Card className='rounded-2xl'><CardHeader><CardTitle>Compliance & Safety</CardTitle><CardDescription>Security built-in</CardDescription></CardHeader>
            <CardContent className='grid gap-3 text-sm'>
              <div>Data minimization, opt-in analytics, POPIA/GDPR mindful</div>
              <div>No PII stored by default; private model options available</div>
              <div>Human-in-the-loop for sensitive interactions</div>
            </CardContent></Card>
        </div>
      </div>
    </Section>

    <Section id='pricing' className='py-10'>
      <h2 className='text-3xl font-bold font-serif tracking-tight mb-6'>Simple pricing</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {PRICING_TIERS.map(tier=>(
          <Card key={tier.name} className={`rounded-2xl ${tier.featured?'border-[#A85C32] shadow-md':''}`}>
            <CardHeader><CardTitle className='flex items-center justify-between'>{tier.name}{tier.featured&&<span className='text-xs font-semibold text-[#A85C32]'>Popular</span>}</CardTitle>
              <CardDescription><div className='text-2xl font-extrabold'>{tier.price}</div><div className='text-slate-600'>{tier.setup}</div></CardDescription></CardHeader>
            <CardContent className='grid gap-3 text-sm'>{tier.points.map(p=>(<div key={p} className='flex gap-2'>• {p}</div>))}
              <Button className='mt-2 rounded-xl w-full'>{tier.cta}</Button></CardContent>
          </Card>
        ))}
      </div>
    </Section>

    <Section id='case-studies' className='py-10'>
      <h2 className='text-3xl font-bold font-serif tracking-tight mb-6'>Results our clients see</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {CASE_STUDIES.map(cs=>(
          <Card key={cs.title} className='rounded-2xl'><CardHeader><CardTitle className='text-lg'>{cs.title}</CardTitle><CardDescription>Verified outcome</CardDescription></CardHeader>
          <CardContent><blockquote className='italic text-slate-600'>“{cs.quote}”</blockquote><div className='mt-4 text-sm font-medium'>— {cs.author}</div></CardContent></Card>
        ))}
      </div>
    </Section>

    <Section id='faq' className='py-10'>
      <h2 className='text-3xl font-bold font-serif tracking-tight mb-6'>FAQ</h2>
      <div className='grid md:grid-cols-2 gap-6'>
        <Card className='rounded-2xl'><CardHeader><CardTitle className='text-lg'>How fast can we go live?</CardTitle></CardHeader><CardContent className='text-slate-600'>Most clients launch within ~2 weeks after our kickoff workshop and content handover.</CardContent></Card>
        <Card className='rounded-2xl'><CardHeader><CardTitle className='text-lg'>Which tools do you integrate?</CardTitle></CardHeader><CardContent className='text-slate-600'>HubSpot/Salesforce, WhatsApp Business, web chat, booking engines via API (Amadeus, Sabre).</CardContent></Card>
        <Card className='rounded-2xl'><CardHeader><CardTitle className='text-lg'>Will AI replace my agents?</CardTitle></CardHeader><CardContent className='text-slate-600'>No — we automate repetitive tasks so agents focus on complex, high‑value service and sales.</CardContent></Card>
        <Card className='rounded-2xl'><CardHeader><CardTitle className='text-lg'>Can you work with POPIA & GDPR?</CardTitle></CardHeader><CardContent className='text-slate-600'>Yes — data minimization by default, opt‑in analytics, private model hosting available.</CardContent></Card>
      </div>
    </Section>

    <Section id='contact' className='py-14'>
      <div className='grid lg:grid-cols-2 gap-10 items-start'>
        <div>
          <h2 className='text-3xl font-bold font-serif tracking-tight'>Let’s talk</h2>
          <p className='mt-3 text-slate-600 max-w-prose'>Tell us about your goals. We’ll share a quick plan and pilot scope. Prefer a live chat? Book a slot and we’ll meet you on Teams or Zoom.</p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <a href='https://calendar.app.google/9Lg9BzZy97jv3poHA' target='_blank' rel='noopener noreferrer'><Button className='rounded-2xl'>Schedule a call</Button></a>
            <a href='tel:+27110000000'><Button variant='outline' className='rounded-2xl'>Call us</Button></a>
          </div>
        </div>
        <Card className='rounded-2xl'><CardHeader><CardTitle>Send a message</CardTitle><CardDescription>We usually reply within 1 business day</CardDescription></CardHeader>
          <CardContent><form onSubmit={handleSubmit} className='grid gap-4'>
            <input type='text' name='website' value={form.website} onChange={handleChange} className='hidden' tabIndex={-1} autoComplete='off' />
            <Input required name='name' placeholder='Your name' value={form.name} onChange={handleChange}/>
            <Input required type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange}/>
            <Input name='company' placeholder='Company (optional)' value={form.company} onChange={handleChange}/>
            <Textarea name='message' placeholder='Tell us what you want to achieve' value={form.message} onChange={handleChange}/>
            <Button type='submit' className='rounded-2xl' disabled={submitting}>{submitting?'Sending…':'Send message'}</Button>
            {result && (<div className={result.ok?'text-green-700':'text-red-600'}>{result.msg}</div>)}
          </form></CardContent></Card>
      </div>
    </Section>

    <footer className='border-t bg-white/60'>
      <Section className='py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600'>
        <div>© {new Date().getFullYear()} TARAS. All rights reserved.</div>
        <div className='flex gap-6'><a href='#' className='hover:text-[#A85C32]'>Privacy</a><a href='#' className='hover:text-[#A85C32]'>Terms</a><a href='#' className='hover:text-[#A85C32]'>Security</a></div>
      </Section>
    </footer>
  </div>)
}
