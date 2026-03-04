import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Ricky's Restaurant" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-amber-900/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 px-4 text-white">
          <h2 className="text-amber-400 font-medium tracking-widest uppercase mb-2 text-sm md:text-base">Get In Touch</h2>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold uppercase tracking-wider">Contact Us</h1>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div>
            <h3 className="text-amber-600 font-bold tracking-widest uppercase mb-2 text-sm">Information</h3>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
              We'd Love To Hear From You
            </h2>
            <p className="text-zinc-600 mb-10 leading-relaxed">
              Whether you want to make a reservation, inquire about our premium catering services for your next private or corporate event, or simply ask a question, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-zinc-900 text-lg mb-1">Location</h4>
                  <p className="text-zinc-600 leading-relaxed">
                    Shop No. 5, Marina Pearl View Hotel Apt.,<br />
                    Waterfront Al Masara Street,<br />
                    Dubai Marina
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-zinc-900 text-lg mb-1">Phone</h4>
                  <p className="text-zinc-600">+971 54 339 2616</p>
                  <p className="text-zinc-600">+971 4 514 7066</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-zinc-900 text-lg mb-1">Email</h4>
                  <p className="text-zinc-600">director@rickyrestaurants.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-zinc-900 text-lg mb-1">Opening Hours</h4>
                  <p className="text-zinc-600">Monday - Sunday</p>
                  <p className="text-zinc-600">09:00 AM - 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact / Reservation Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-zinc-100">
            <h3 className="font-playfair text-2xl font-bold text-zinc-900 mb-6">Make a Reservation</h3>
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">Full Name *</label>
                  <input type="text" id="name" className="w-full border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">Phone Number *</label>
                  <input type="tel" id="phone" className="w-full border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" placeholder="+971 50 123 4567" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email Address *</label>
                <input type="email" id="email" className="w-full border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" placeholder="john@example.com" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-zinc-700 mb-2">Date</label>
                  <input type="date" id="date" className="w-full border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-zinc-700 mb-2">Number of Guests</label>
                  <select id="guests" className="w-full border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition bg-white">
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                    <option>Catering / Large Event</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Special Requests / Message</label>
                <textarea id="message" rows={4} className="w-full border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none" placeholder="Tell us about your catering needs or reservation preferences..."></textarea>
              </div>

              <button type="button" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-md shadow-md transition duration-300 uppercase tracking-widest text-sm">
                Send Request
              </button>

            </form>
          </div>
          
        </div>
      </section>

    </div>
  );
}