import { ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    name: 'Camiseta Serpent Throne',
    price: 'R$ 89,90',
    image: 'black metal tshirt',
  },
  {
    name: 'Moletom Silver Death Logo',
    price: 'R$ 149,90',
    image: 'black hoodie',
  },
  {
    name: 'Boné Snake Edition',
    price: 'R$ 69,90',
    image: 'black cap',
  },
  {
    name: 'Poster Oficial Tour 2025',
    price: 'R$ 39,90',
    image: 'dark poster',
  },
];

export function MerchSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-center mb-16"
          style={{
            textShadow: '0 0 20px #B00000, 0 0 40px #B00000',
            color: '#C0C0C0',
          }}
        >
          Merch Oficial
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-black border-2 border-[#B00000] overflow-hidden transition-all duration-300 hover:border-[#ff0000] hover:shadow-[0_0_40px_rgba(176,0,0,0.6)] hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-[#0a0000] overflow-hidden">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1?w=400&h=400`}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg mb-2 group-hover:text-[#B00000] transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl text-[#C0C0C0] mb-4">{product.price}</p>
                
                <button 
                  className="w-full py-3 bg-[#B00000] text-white uppercase text-sm tracking-wider transition-all duration-300 hover:bg-[#ff0000] flex items-center justify-center gap-2"
                  style={{
                    boxShadow: '0 0 20px rgba(176, 0, 0, 0.5)',
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Comprar
                </button>
              </div>
              
              {/* Corner Accent */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#ff0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
