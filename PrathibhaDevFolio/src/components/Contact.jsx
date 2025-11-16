import React from 'react'
import useReveal from '../utils/useReveal'
import { contactInfo } from '../portfolio'


export default function Contact(){
const ref = useReveal()
return (
<section className="mt-12" ref={ref} id="contact">
<div className="reveal">
<h3 className="uppercase text-sm text-slate-400">{contactInfo.title}</h3>
<p className="text-slate-300 mt-2">{contactInfo.subtitle}</p>
<div className="card p-4 mt-4">
<p className="text-slate-300">Email: <a href={`mailto:${contactInfo.email_address}`} className="text-accent">{contactInfo.email_address}</a></p>
<p className="text-slate-300 mt-2">Phone: {contactInfo.number}</p>
</div>
</div>
</section>
)
}