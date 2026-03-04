import Image from 'next/image';
import Link from 'next/link';

export default function SpecialOccasionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1530103862676-de889caefce3?q=80&w=2000&auto=format&fit=crop" alt="Special Occasion Catering" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-amber-900/50 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 px-4 text-white">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold uppercase tracking-wider">Special Occasion</h1>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl font-bold text-amber-600 mb-6">Celebrate Life's Milestones</h2>
        <p className="text-zinc-600 mb-10 leading-relaxed text-lg">
          Whether it is an anniversary, a graduation, a baby shower, or a family reunion, every special occasion deserves exceptional food. We take the stress out of event planning by delivering top-tier catering services directly to your venue. Let us handle the culinary details while you focus on celebrating with your loved ones.
        </p>
        <Link href="/contact" className="inline-block bg-amber-600 text-white font-medium px-10 py-4 rounded shadow-lg hover:bg-amber-700 hover:-translate-y-1 transition-all duration-300">
          Request a Quote
        </Link>
      </section>
    </div>
  );
}