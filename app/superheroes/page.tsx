import Link from 'next/link';
import ColoringGallery from '@/components/ColoringGallery';

const superheroPages = [
  { id: '1', title: 'Super Strength', imageUrl: '/coloring-svg/hero1.svg' },
  { id: '2', title: 'Flying Hero', imageUrl: '/coloring-svg/hero2.svg' },
  { id: '3', title: 'Web Slinger', imageUrl: '/coloring-svg/hero3.svg' },
  { id: '4', title: 'Shield Hero', imageUrl: '/coloring-svg/hero4.svg' },
  { id: '5', title: 'Armored Hero', imageUrl: '/coloring-svg/hero5.svg' },
  { id: '6', title: 'Speed Hero', imageUrl: '/coloring-svg/hero6.svg' },
];

export default function SuperheroesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Link href="/">
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform mb-4">
              ← Back Home
            </button>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg mb-4">
            🦸‍♂️⚡ SUPERHEROES ⚡🦸‍♂️
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
            Click any picture to print it out!
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <ColoringGallery pages={superheroPages} category="Superheroes" color="blue" />
        </div>
      </div>
    </div>
  );
}
