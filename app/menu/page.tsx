import Image from 'next/image';
import Link from 'next/link';

// Sample data structure to make editing the menu easy!
const menuCategories = [
  {
    category: "Grill Feast",
    items: [
      { name: "Caesar Salad", desc: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons.", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=400&auto=format&fit=crop" },
      { name: "Hummus", desc: "Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, and served with warm pita.", img: "https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?q=80&w=400&auto=format&fit=crop" },
      { name: "Tahina", desc: "Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil.", img: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=400&auto=format&fit=crop" },
      { name: "Mutton Kofta (Seekh Kabab)", desc: "Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection.", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=400&auto=format&fit=crop" },
    ]
  },
  {
    category: "Grill Paradise",
    items: [
      { name: "Chicken Skewers", desc: "Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop" },
      { name: "Grilled Chicken Bone", desc: "Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor.", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=400&auto=format&fit=crop" },
      { name: "Pasta (White or Pink)", desc: "Al dente pasta served with your choice of creamy white sauce or tangy pink sauce.", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400&auto=format&fit=crop" },
      { name: "Seasoned Rice", desc: "Fluffy seasoned rice, infused with aromatic herbs and spices, offering a fragrant complement.", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=400&auto=format&fit=crop" },
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop" 
            alt="Restaurant Dining Table" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-amber-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 px-4 text-white">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold uppercase tracking-wider">
            Catering Menu
          </h1>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {menuCategories.map((menu, index) => (
          <div key={index} className="mb-20 last:mb-0">
            {/* Category Title */}
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-12 uppercase tracking-wide">
              {menu.category}
            </h2>
            
            {/* Grid of Items */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {menu.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex bg-white p-3 rounded-lg shadow-sm border border-zinc-100 hover:shadow-md transition duration-300">
                  {/* Item Image */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-md">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Item Text */}
                  <div className="ml-4 flex flex-col justify-center w-full">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-playfair font-bold text-lg text-zinc-900">{item.name}</h3>
                      {/* Decorative dots to simulate a traditional menu */}
                      <div className="flex-grow border-b-2 border-dotted border-zinc-300 mx-2 relative top-[-6px]"></div>
                    </div>
                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Reservation Button Section */}
      <section className="bg-white py-16 border-t border-zinc-200 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-zinc-900 mb-4">Ready to Dine With Us?</h2>
          <p className="text-zinc-600 mb-8">
            Whether it's a private dinner or a large corporate event, we are here to serve you the finest dishes in Dubai.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Make a Reservation
          </Link>
        </div>
      </section>

    </div>
  );
}