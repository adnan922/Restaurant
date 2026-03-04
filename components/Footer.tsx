import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
        
        {/* About */}
        <div className="md:col-span-1">
          <h3 className="font-playfair text-2xl font-bold text-white mb-6"></h3>
          <p className="text-sm text-zinc-400 mb-6">
            Bringing the finest combination of spices to your table, whether dining in or catering your biggest life events.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-500 transition"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="hover:text-amber-500 transition"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="hover:text-amber-500 transition"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-1">
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" />
              <span>Shop No. 5, Marina Pearl View Hotel Apt, Waterfront Al Masara St, Dubai Marina</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" />
              <span>+971 54 339 2616</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" />
              <span>director@rickyrestaurants.com</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-1">
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition">Yacht Party Catering</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Birthday Party Catering</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Wedding Catering</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Corporate Catering</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition">Reservation</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>
      <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}