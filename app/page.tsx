import Image from 'next/image';
import { Clock, Users, Utensils } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        {/* Replace src with a real image path */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" 
            alt="Restaurant Interior" 
            fill 
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto text-white">
          <h2 className="text-amber-500 font-medium tracking-widest uppercase mb-4">Welcome to Restaurant</h2>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">Eat What Makes You Happy</h1>
          <p className="text-lg md:text-xl text-zinc-200 mb-8 max-w-2xl mx-auto">
            Experience the finest spices and professional catering services in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-medium transition">
              Order Now
            </a>
            <a href="#contact" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 px-8 py-3 rounded-full text-lg font-medium transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-amber-600 font-bold tracking-wider uppercase mb-2">About Us</h3>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Get the food that makes you drool!</h2>
              <p className="text-zinc-600 leading-relaxed mb-6 text-lg">
                Restaurant is one of the finest restaurants to dine-in with the best combination of spices according to your taste. Our professional staff is at your service with food delivery, event catering, and other exceptional services.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-10 border-t pt-8 border-zinc-100">
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-amber-600 mb-2">15+</div>
                  <div className="text-sm text-zinc-500 uppercase font-medium">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-amber-600 mb-2">20+</div>
                  <div className="text-sm text-zinc-500 uppercase font-medium">Trained Chefs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-sm text-zinc-500 uppercase font-medium">Stunning Dishes</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
               <Image 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" 
                  alt="Delicious food platter" 
                  fill 
                  className="object-cover hover:scale-105 transition duration-700" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* Catering Services */}
      <section id="catering" className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center lg:px-8">
          <h3 className="text-amber-600 font-bold tracking-wider uppercase mb-2">Catering Services</h3>
          <h2 className="font-playfair text-4xl font-bold text-zinc-900 mb-6">Organising Private & Corporate Parties</h2>
          <p className="text-zinc-600 max-w-3xl mx-auto mb-12">
            Are you planning a private party, birthday, small or large event, wedding, or outdoor food catering? Treat your friends and clients with the best food available in Dubai.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Wedding Catering', 'Birthday Party', 'Yacht Catering', 'Kids Party', 'Corporate Events', 'Special Occasion'].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden group">
                <div className="h-48 bg-zinc-200 relative">
                  {/* Decorative placeholder. Use actual service imagery here */}
                  <Image src={`https://source.unsplash.com/600x400/?catering,party&sig=${index}`} alt={service} fill className="object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-xl font-bold mb-2">{service}</h4>
                  <p className="text-zinc-500 text-sm">Professional and seamless service tailored exactly to your event needs.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-amber-600 font-bold tracking-wider uppercase mb-2">Catering Menu</h3>
            <h2 className="font-playfair text-4xl font-bold text-zinc-900">Grill Feast Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <MenuItem title="Mutton Kofta (Seekh Kabab)" desc="Juicy mutton seekh kebabs expertly seasoned with aromatic spices." price="Popular" />
            <MenuItem title="Chicken Skewers" desc="Tender chicken skewers marinated in a flavorful blend of spices." />
            <MenuItem title="Classic Hummus" desc="Smooth and savory chickpea hummus drizzled with olive oil." />
            <MenuItem title="Pasta (White or Pink)" desc="Al dente pasta served with choice of creamy white or tangy pink sauce." />
            <MenuItem title="Grilled Chicken Bone" desc="Seasoned to perfection and bursting with savory flavor." />
            <MenuItem title="Caesar Salad" desc="Crisp romaine tossed with creamy Caesar, Parmesan, and croutons." />
          </div>
        </div>
      </section>

    </div>
  );
}

function MenuItem({ title, desc, price }: { title: string, desc: string, price?: string }) {
  return (
    <div className="border-b border-zinc-100 pb-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-playfair text-xl font-bold text-zinc-900">{title}</h4>
        {price && <span className="text-amber-600 font-semibold">{price}</span>}
      </div>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}