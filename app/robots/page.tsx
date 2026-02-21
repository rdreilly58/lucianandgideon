import Link from 'next/link';
import ColoringGallery from '@/components/ColoringGallery';

const robotPages = [
  { id: '1', title: 'Cool Robot', imageUrl: '/coloring-pages/robots/robot-1.png' },
  { id: '2', title: 'Robot Warrior', imageUrl: '/coloring-pages/robots/robot-2.png' },
  { id: '3', title: 'Flying Robot', imageUrl: '/coloring-pages/robots/robot-3.png' },
  { id: '4', title: 'Giant Robot', imageUrl: '/coloring-pages/robots/robot-4.png' },
  { id: '5', title: 'Space Robot', imageUrl: '/coloring-pages/robots/robot-5.png' },
  { id: '6', title: 'Cute Robot', imageUrl: '/coloring-pages/robots/robot-6.png' },
];

export default function RobotsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Link href="/">
            <button className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform mb-4">
              ← Back Home
            </button>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg mb-4">
            🤖⚡ ROBOTS ⚡🤖
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
            Click any picture to print it out!
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <ColoringGallery pages={robotPages} category="Robots" color="purple" />
        </div>
      </div>
    </div>
  );
}
