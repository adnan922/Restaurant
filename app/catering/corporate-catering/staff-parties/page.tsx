import Image from 'next/image';
import Link from 'next/link';

export default function StaffPartiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          {/* Using a collaborative/team event image */}
          <Image src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop" alt="Staff Parties Catering" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-amber-900/50 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 px-4 text-white">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold uppercase tracking-wider">Staff Parties</h1>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl font-bold text-amber-600 mb-6">Reward Your Team with Great Food</h2>
        <p className="text-zinc-600 mb-10 leading-relaxed text-lg">
          A great team deserves a great celebration. Whether it's an end-of-year bash, a milestone celebration, or a casual Friday get-together, our staff party catering services are designed to boost morale and bring people together. We offer flexible menus ranging from interactive food stations to laid-back buffets, ensuring everyone on your team leaves happy and full.
        </p>
        <Link href="/contact" className="inline-block bg-amber-600 text-white font-medium px-10 py-4 rounded shadow-lg hover:bg-amber-700 hover:-translate-y-1 transition-all duration-300">
          Book Your Team Event
        </Link>
      </section>
    </div>
  );
}