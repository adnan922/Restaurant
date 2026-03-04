import Image from 'next/image';
import Link from 'next/link';

// Array of the sub-services (Kids, Staff, and Yacht removed for now)
const privateServices = [
  { title: "WEDDING CATERING", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop", link: "/catering/private-catering/wedding" },
  { title: "SPECIAL OCCASION", img: "https://images.unsplash.com/photo-1530103862676-de889caefce3?q=80&w=600&auto=format&fit=crop", link: "/catering/private-catering/special-occasion" },
  { title: "BIRTHDAY PARTY CATERING", img: "https://images.unsplash.com/photo-1530103043960-53a9af4711f1?q=80&w=600&auto=format&fit=crop", link: "/catering/private-catering/birthday" },
];

export default function PrivateCateringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1555244162-803834f87a33?q=80&w=2000&auto=format&fit=crop" 
            alt="Private Events Catering Buffet" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-amber-900/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 px-4 text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider drop-shadow-md">
            Private Events Catering
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-amber-600 font-bold tracking-widest uppercase mb-4 text-sm">Catering</h3>
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-amber-600 mb-8 capitalize">
          Organizing Private Catering In Dubai
        </h2>
        <div className="space-y-6 text-zinc-600 leading-relaxed text-sm md:text-base">
          <p>
            Ricky's Restaurant offers customized private catering services in Dubai. We cater to groups of all sizes, from small and intimate gatherings to large lavish parties. With amazing food, unique presentation, and excellent service, our team of professionals will create a memorable experience for you and your guests.
          </p>
          <p>
            Whether you need private catering services for an intimate gathering or a large event, Ricky's Restaurant is your perfect choice. We make your special moments memorable by delivering exceptional culinary experiences and outstanding service. We take away all the stress so you can focus on enjoying your occasion and creating wonderful memories at Ricky's Restaurant.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted grid to perfectly center the 3 remaining items on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {privateServices.map((service, index) => (
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
            <div className="relative lg:w-1/2 h-80 lg:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop" 
                alt="Elegant Table Setup" 
                fill 
                className="object-cover" 
              />
            </div>
            {/* Content Side */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-amber-600 mb-6">
                Professional Catering Services In Dubai
              </h3>
              <p className="text-zinc-600 mb-6 text-sm md:text-base leading-relaxed">
                When it comes to professional catering services in Dubai, taste and dedication matter most. Ricky's Restaurant has been at the forefront of professional catering in Dubai. 
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold text-zinc-900 mb-4">Private Events Catering | Ricky's Restaurant</h4>
                <ul className="space-y-2">
                  {['Planning', 'Managing', 'Delegating', 'Executing'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-zinc-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-zinc-600 mb-8 text-sm italic">
                We ensure there is no burden on our prospective occasion... making your event outstanding.
              </p>

              <div>
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded shadow transition">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {/* Using placeholder food images for the gallery */}
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