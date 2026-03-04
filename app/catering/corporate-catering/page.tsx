import Image from 'next/image';
import Link from 'next/link';

// Array for corporate services based on the screenshot
const corporateServices = [
  { title: "STAFF PARTIES", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop", link: "/catering/corporate-catering/staff-parties" },
  { title: "BUSINESS PARTY CATERING", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop", link: "/catering/corporate-catering/business-party" },
];

export default function CorporateCateringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Events Catering Buffet" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-amber-900/50 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 px-4 text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider drop-shadow-md">
            Corporate Events Catering
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-amber-600 font-bold tracking-widest uppercase mb-4 text-sm">Catering</h3>
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-amber-600 mb-8 capitalize">
          Organizing Corporate Catering In Dubai
        </h2>
        <div className="space-y-6 text-zinc-600 leading-relaxed text-sm md:text-base">
          <p>
            Ricky's Restaurant Catering is recognized as one of the premier corporate catering service providers in Dubai. With a wealth of experience, we pride ourselves on delivering outstanding catering services tailored specifically to meet your corporate event needs.
          </p>
          <p>
            Our corporate catering covers everything from small office meetings and business lunches to large corporate seminars and annual company gatherings. We understand the importance of making a lasting impression on your clients and colleagues, which is why we offer a diverse menu selection that can be customized to suit any dietary requirement and preference.
          </p>
          <p className="font-medium text-zinc-800">
            Ricky's Restaurant Catering is your top choice for exceptional professional corporate catering in Dubai, ensuring your next corporate event is a resounding success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {corporateServices.map((service, index) => (
            <Link href={service.link} key={index} className="group block bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-4 text-center border-t border-zinc-100">
                <h4 className="font-playfair font-bold text-zinc-900 tracking-wide">{service.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Split Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="relative lg:w-5/12 h-80 lg:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop" 
                alt="Corporate Meeting Table Setup" 
                fill 
                className="object-cover" 
              />
            </div>
            {/* Content Side */}
            <div className="lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-amber-600 mb-8">
                Corporate Catering Services In Dubai
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-zinc-900 mb-2">Why Choose Ricky's Restaurant Catering?</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">We understand that planning a corporate event can be stressful. Our experienced team will handle all the catering details, so you can focus on the business at hand.</p>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-900 mb-2">We Are Reliable</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">With extensive experience in corporate catering and hospitality, we assure your peace of mind. Our commitment means we handle all the details and execution seamlessly.</p>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-900 mb-2">Delectable, Quality-Controlled Food</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">Our menu features diverse favorites like Canapés, international dishes, and snack boxes. You can customize the preparation to suit your event, creating a delightful dining experience for your guests.</p>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-900 mb-2">Versatile Corporate Catering Services</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">Ricky's Restaurant Catering offers a range of services from drop-off packages to fully staffed events. Whether you're hosting 20 or 500 people, we have the experience to handle proficiency.</p>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-900 mb-2">Productivity</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">We provide reliable, efficient, and professional corporate catering services directly to your location. Our wealth of experience, flexibility, and dedication ensure that we meet and exceed expectations.</p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded shadow transition">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=500&auto=format&fit=crop"
          ].map((src, idx) => (
            <div key={idx} className="relative h-48 sm:h-64 group overflow-hidden">
              <Image src={src} alt="Gallery Image" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}