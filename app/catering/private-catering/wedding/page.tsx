import Image from 'next/image';
import Link from 'next/link';

export default function WeddingCateringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop" alt="Wedding Catering Dubai" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-amber-900/50 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 px-4 text-white">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold uppercase tracking-wider">Wedding Catering</h1>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl font-bold text-amber-600 mb-6">Make Your Big Day Unforgettable</h2>
        <p className="text-zinc-600 mb-10 leading-relaxed text-lg">
          Your wedding day is one of the most important days of your life. At Ricky's Restaurant, we provide elegant, customized wedding catering services in Dubai. From intimate receptions to grand celebrations, our culinary team will craft a menu that perfectly reflects your love story, ensuring your guests enjoy a dining experience they will never forget.
        </p>
        <Link href="/contact" className="inline-block bg-amber-600 text-white font-medium px-10 py-4 rounded shadow-lg hover:bg-amber-700 hover:-translate-y-1 transition-all duration-300">
          Plan Your Wedding Menu
        </Link>
      </section>
    </div>
  );
}