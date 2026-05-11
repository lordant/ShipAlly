import React from "react";
import { Anchor, ShieldCheck, Globe2, Clock, Recycle, Fuel, Waves, Ship, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Recycle className="h-7 w-7" />,
    title: "Environmental Waste Disposal",
    description:
      "Safe, efficient, and fully compliant maritime waste management across major international ports, from collection through final disposal.",
  },
  {
    icon: <Waves className="h-7 w-7" />,
    title: "Cargo Slops & Sludge Disposal",
    description:
      "Certified slops and sludge disposal through approved recycling facilities and compliant disposal channels, with oil recovery rebates where applicable.",
  },
  {
    icon: <Fuel className="h-7 w-7" />,
    title: "De-Bunkering Services",
    description:
      "Reliable removal and disposal of off-spec or contaminated bunker fuel, managed safely to minimize vessel downtime.",
  },
  {
    icon: <Ship className="h-7 w-7" />,
    title: "Tank Cleaning & De-Mucking",
    description:
      "Professional tank cleaning, de-mucking, inspection, chemical supply, and compliant disposal for drydock, hot work, cargo changes, and conversions.",
  },
];

const strengths = [
  "Safety and environmental compliance",
  "Operational efficiency",
  "Cost optimization",
  "Fast turnaround times",
  "Reliable 24/7 support",
  "Transparent communication",
];

const capabilities = [
  "Network coverage across 150+ ports globally",
  "Verified partners with MARPOL compliance, insurance, and local permits",
  "End-to-end coordination with Masters, agents, and vessel operators",
  "Rapid response support across major ports",
  "Competitive and transparent pricing",
  "Specialized equipment including Framo and Mariflex pumping systems",
];

export default function ShipAllyWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20">
              <Anchor className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">ShipAlly</p>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">Maritime Solutions</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#safety" className="hover:text-white">Safety</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Button className="rounded-full bg-cyan-400 px-5 text-slate-950 hover:bg-cyan-300">Get in Touch</Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.24),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.2),rgba(8,47,73,0.35))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              Global maritime environmental services from Singapore
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Confidence through reliable maritime execution.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              ShipAlly delivers specialized environmental, operational, and vessel support services across major international ports — helping shipowners, managers, operators, Masters, and agents execute safely, efficiently, and with minimal disruption.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-cyan-400 px-8 py-6 text-base text-slate-950 hover:bg-cyan-300">Request Support</Button>
              <Button variant="outline" className="rounded-full border-white/20 bg-white/5 px-8 py-6 text-base text-white hover:bg-white/10">Explore Services</Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/50 backdrop-blur">
              <div className="grid gap-4">
                <div className="rounded-3xl bg-slate-900/80 p-6">
                  <Globe2 className="mb-8 h-10 w-10 text-cyan-300" />
                  <p className="text-5xl font-bold">150+</p>
                  <p className="mt-2 text-slate-300">Ports supported through a global partner network</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <ShieldCheck className="mb-4 h-8 w-8 text-cyan-300" />
                    <p className="font-semibold">Compliance led</p>
                    <p className="mt-2 text-sm text-slate-400">MARPOL, MEPC and IMO aligned operations</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <Clock className="mb-4 h-8 w-8 text-cyan-300" />
                    <p className="font-semibold">24/7 Support</p>
                    <p className="mt-2 text-sm text-slate-400">Responsive coordination from start to completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">About ShipAlly</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Operational expertise. Global reach. Accountable delivery.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Headquartered in Singapore, ShipAlly is a global maritime solutions provider delivering environmental waste disposal, deslopping, de-bunkering, tank cleaning, and sludge management services for the shipping industry.
            </p>
            <p>
              We combine experienced maritime professionals, trusted partners, and responsive operational coordination to deliver safe, compliant, and cost-effective outcomes worldwide.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Products & Services</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Integrated maritime environmental solutions</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              From waste disposal to complex tank preparation, ShipAlly manages end-to-end coordination with safety, compliance, and turnaround time at the center of every operation.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="rounded-3xl border-white/10 bg-white/10 text-white shadow-xl shadow-slate-950/20">
                <CardContent className="p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold">Why choose ShipAlly</h2>
            <div className="mt-8 grid gap-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-700" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold">Our capabilities</h2>
            <div className="mt-8 grid gap-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/10 p-10 shadow-2xl shadow-slate-950/20 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Safety Policy</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Safe, responsible, and environmentally compliant operations.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                ShipAlly is committed to the highest standards of health, safety, and environmental responsibility. Every operation is planned and controlled to identify, reduce, and manage risk.
              </p>
              <p>
                Through competent personnel, proper equipment, safe work practices, proactive reporting, and continuous improvement, ShipAlly works to achieve safe, efficient, and incident-free operations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Get in touch</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Need vessel support?</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Contact ShipAlly for responsive operational support, transparent communication, and reliable maritime environmental services.
            </p>
            <div className="mt-8 space-y-5 text-slate-700">
              <div className="flex gap-3"><MapPin className="h-6 w-6 text-cyan-700" />10 Anson Road #20-05 International Plaza, Singapore 079903</div>
              <div className="flex gap-3"><Phone className="h-6 w-6 text-cyan-700" />+65 9888 9181 | +65 9365 8503</div>
              <div className="flex gap-3"><Mail className="h-6 w-6 text-cyan-700" />ops@shipally.com | ops.shipally@gmail.com</div>
            </div>
          </div>

          <form className="rounded-[2rem] bg-slate-100 p-8 shadow-xl">
            <div className="grid gap-5">
              <input className="rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-cyan-500" placeholder="Name" />
              <input className="rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-cyan-500" placeholder="Email *" />
              <input className="rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-cyan-500" placeholder="Phone Number *" />
              <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-cyan-500" placeholder="Message *" />
              <Button className="rounded-full bg-slate-950 py-6 text-base text-white hover:bg-slate-800">Submit Enquiry</Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} ShipAlly Pte Ltd. Global maritime environmental solutions.
      </footer>
    </div>
  );
}
