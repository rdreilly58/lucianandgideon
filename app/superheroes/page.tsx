import Link from 'next/link';
import ColoringGallery from '@/components/ColoringGallery';

const BASE_URL = 'https://raw.githubusercontent.com/rdreilly58/lucianandgideon/main/public/coloring-pages';

const superheroPages = [
  { id: '1', title: 'Superman', imageUrl: `${BASE_URL}/superheroes/hero-1.png` },
  { id: '2', title: 'Batman', imageUrl: `${BASE_URL}/superheroes/hero-2.png` },
  { id: '3', title: 'Spider-Man', imageUrl: `${BASE_URL}/superheroes/hero-3.png` },
  { id: '4', title: 'Captain America', imageUrl: `${BASE_URL}/superheroes/hero-4.png` },
  { id: '5', title: 'Iron Man', imageUrl: `${BASE_URL}/superheroes/hero-5.png` },
  { id: '6', title: 'The Flash', imageUrl: `${BASE_URL}/superheroes/hero-6.png` },
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
