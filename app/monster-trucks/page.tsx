import Link from 'next/link';
import ColoringGallery from '@/components/ColoringGallery';

const monsterTruckPages = [
  { id: '1', title: 'Hot Wheels Racer', imageUrl: '/coloring-svg/truck1.svg' },
  { id: '2', title: 'Monster Truck Jump', imageUrl: '/coloring-svg/truck2.svg' },
  { id: '3', title: 'Big Wheel Truck', imageUrl: '/coloring-svg/truck3.svg' },
  { id: '4', title: 'Racing Hot Wheels', imageUrl: '/coloring-svg/truck4.svg' },
  { id: '5', title: 'Monster Jam', imageUrl: '/coloring-svg/truck5.svg' },
  { id: '6', title: 'Cool Race Car', imageUrl: '/coloring-svg/truck6.svg' },
];

export default function MonsterTrucksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Link href="/">
            <button className="bg-white text-red-600 font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform mb-4">
              ← Back Home
            </button>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg mb-4">
            🚗💨 MONSTER TRUCKS 💨🚗
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
            Click any picture to print it out!
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <ColoringGallery pages={monsterTruckPages} category="Monster Trucks" color="red" />
        </div>
      </div>
    </div>
  );
}
