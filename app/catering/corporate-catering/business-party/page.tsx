import Image from 'next/image';
import Link from 'next/link';

export default function BusinessPartyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          {/* Using a formal networking/business dinner image */}
          <Image src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop" alt="Business Party Catering Dubai" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-amber-900/50 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 px-4 text-white">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold uppercase tracking-wider">Business Party Catering</h1>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl font-bold text-amber-600 mb-6">Impress Your Clients and Partners</h2>
        <p className="text-zinc-600 mb-10 leading-relaxed text-lg">
          When hosting clients, stakeholders, or VIP guests, flawless execution is non-negotiable. Ricky's Restaurant provides premium business party catering that reflects the professionalism and high standards of your company. From elegant canapés to formal sit-down dinners, our impeccable service ensures a sophisticated and seamless networking environment.
        </p>
        <Link href="/contact" className="inline-block bg-amber-600 text-white font-medium px-10 py-4 rounded shadow-lg hover:bg-amber-700 hover:-translate-y-1 transition-all duration-300">
          Request a Corporate Quote
        </Link>
      </section>
    </div>
  );
}