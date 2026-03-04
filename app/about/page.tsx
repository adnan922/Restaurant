import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000&auto=format&fit=crop" 
            alt="Restaurant Interior" 
            fill 
            className="object-cover"
            priority
          />
          {/* A golden-brown overlay to match the vibe of the original site's banner */}
          <div className="absolute inset-0 bg-amber-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 px-4 text-white">
          <h2 className="text-amber-400 font-medium tracking-widest uppercase mb-2 text-sm md:text-base">
            Restaurant
          </h2>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold uppercase tracking-wider">
            About Us
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        {/* Subtle background overlay (optional, simulating the faded food background) */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mb-12">
            <h3 className="text-amber-600 font-bold tracking-widest uppercase mb-4 text-sm">About Us</h3>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-amber-600 mb-8 uppercase tracking-wide">
              Restaurant
            </h2>
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base mb-12">
              Welcome to Restaurant, where culinary excellence meets unparalleled service. Situated in the vibrant heart of Dubai, Restaurant is renowned for its exquisite dining experiences, offering a diverse menu that caters to both local and international palates. Our commitment to quality and passion for food is reflected in every dish we serve.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="font-playfair font-bold text-xl text-zinc-900 mb-3">Our Culinary Philosophy</h4>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                At Restaurant, we believe that great food starts with the finest ingredients. Our chefs are dedicated to sourcing the best produce, meats, and seafood from trusted suppliers. This commitment to quality ensures that every dish is prepared with care and precision. Whether you're indulging in our signature dishes or exploring new flavors, you can expect a meal that is both delicious and nourishing.
              </p>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-xl text-zinc-900 mb-3">Diverse Menu</h4>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Our menu is a celebration of culinary diversity, offering a wide range of options to suit every taste. From rich, aromatic Asian delicacies and vibrant Middle Eastern specialties to classic Mediterranean fare and innovative international cuisine, we have something for everyone. Each dish is crafted to perfection, ensuring that your dining experience is nothing short of extraordinary.
              </p>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-xl text-zinc-900 mb-3">Exceptional Catering Services</h4>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                In addition to our restaurant dining,  Restaurant is proud to offer comprehensive catering services for all occasions. Whether you're planning a corporate event, a wedding, or a private party, our catering team is here to make your event special. With tailored menus, impeccable service, and a focus on every detail, we bring the same level of excellence to our catered events as we do in our restaurant.
              </p>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-xl text-zinc-900 mb-3">Our Team</h4>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Our team at Restaurant is our greatest asset. From our talented chefs to our friendly and professional staff, everyone is dedicated to making your visit enjoyable. We take pride in our warm hospitality and strive to create a welcoming environment where you can relax and savor every moment.
              </p>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-xl text-zinc-900 mb-3">Commitment to Excellence</h4>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                At Ricky's Restaurant, we are committed to maintaining the highest standards in everything we do. From the freshness of our ingredients to the elegance of our presentation and the attentiveness of our service, we aim to exceed your expectations every time you visit.
              </p>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-xl text-zinc-900 mb-3">Visit Us</h4>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Join us at Ricky's Restaurant and discover why we are a favorite among Dubai's dining enthusiasts. Whether you're looking for a casual meal with friends, a romantic dinner, or a place to celebrate a special occasion, Ricky's Restaurant is the perfect choice. Come and experience the best of culinary artistry and hospitality in a setting that feels like home.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-100">
            <p className="font-playfair text-lg text-amber-700 italic">
              Thank you for choosing Ricky's Restaurant. We look forward to serving you soon!
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}