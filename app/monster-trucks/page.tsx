import Link from 'next/link';
import ColoringGallery from '@/components/ColoringGallery';

const monsterTruckPages = [
  { id: '1',  title: 'Crusher King',       imageUrl: '/coloring-pages/monster-trucks/truck-01.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-01.png' },
  { id: '2',  title: 'Big Air Jump',        imageUrl: '/coloring-pages/monster-trucks/truck-02.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-02.png' },
  { id: '3',  title: 'Ramp Rider',          imageUrl: '/coloring-pages/monster-trucks/truck-03.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-03.png' },
  { id: '4',  title: 'Spike Smash',         imageUrl: '/coloring-pages/monster-trucks/truck-04.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-04.png' },
  { id: '5',  title: 'Thunder Wheels',      imageUrl: '/coloring-pages/monster-trucks/truck-05.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-05.png' },
  { id: '6',  title: 'Dirt Destroyer',      imageUrl: '/coloring-pages/monster-trucks/truck-06.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-06.png' },
  { id: '7',  title: 'Mega Mudder',         imageUrl: '/coloring-pages/monster-trucks/truck-07.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-07.png' },
  { id: '8',  title: 'Flame Blaster',       imageUrl: '/coloring-pages/monster-trucks/truck-08.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-08.png' },
  { id: '9',  title: 'Iron Beast',          imageUrl: '/coloring-pages/monster-trucks/truck-09.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-09.png' },
  { id: '10', title: 'Rock Climber',        imageUrl: '/coloring-pages/monster-trucks/truck-10.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-10.png' },
  { id: '11', title: 'Turbo Titan',         imageUrl: '/coloring-pages/monster-trucks/truck-11.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-11.png' },
  { id: '12', title: 'Gravel Gobbler',      imageUrl: '/coloring-pages/monster-trucks/truck-12.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-12.png' },
  { id: '13', title: 'Super Stomper',       imageUrl: '/coloring-pages/monster-trucks/truck-13.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-13.png' },
  { id: '14', title: 'Nitro Nightmare',     imageUrl: '/coloring-pages/monster-trucks/truck-14.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-14.png' },
  { id: '15', title: 'Mud Maniac',          imageUrl: '/coloring-pages/monster-trucks/truck-15.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-15.png' },
  { id: '16', title: 'Wrecking Ball',       imageUrl: '/coloring-pages/monster-trucks/truck-16.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-16.png' },
  { id: '17', title: 'Rumble Runner',       imageUrl: '/coloring-pages/monster-trucks/truck-17.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-17.png' },
  { id: '18', title: 'Steel Stampede',      imageUrl: '/coloring-pages/monster-trucks/truck-18.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-18.png' },
  { id: '19', title: 'Blaze Crusher',       imageUrl: '/coloring-pages/monster-trucks/truck-19.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-19.png' },
  { id: '20', title: 'Ultimate Monster',    imageUrl: '/coloring-pages/monster-trucks/truck-20.png', thumbnail: '/coloring-pages/monster-trucks/thumbs/truck-20.png' },
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
