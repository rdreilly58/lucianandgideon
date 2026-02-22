import Link from 'next/link';
import ColoringGallery from '@/components/ColoringGallery';

const robotPages = [
  { id: '1',  title: 'Optimus Prime',    imageUrl: '/coloring-pages/robots/robot-01.png', thumbnail: '/coloring-pages/robots/thumbs/robot-01.png' },
  { id: '2',  title: 'Bumblebee',        imageUrl: '/coloring-pages/robots/robot-02.png', thumbnail: '/coloring-pages/robots/thumbs/robot-02.png' },
  { id: '3',  title: 'Megatron',         imageUrl: '/coloring-pages/robots/robot-03.png', thumbnail: '/coloring-pages/robots/thumbs/robot-03.png' },
  { id: '4',  title: 'Starscream',       imageUrl: '/coloring-pages/robots/robot-04.png', thumbnail: '/coloring-pages/robots/thumbs/robot-04.png' },
  { id: '5',  title: 'Ironhide',         imageUrl: '/coloring-pages/robots/robot-05.png', thumbnail: '/coloring-pages/robots/thumbs/robot-05.png' },
  { id: '6',  title: 'Jazz',             imageUrl: '/coloring-pages/robots/robot-06.png', thumbnail: '/coloring-pages/robots/thumbs/robot-06.png' },
  { id: '7',  title: 'Soundwave',        imageUrl: '/coloring-pages/robots/robot-07.png', thumbnail: '/coloring-pages/robots/thumbs/robot-07.png' },
  { id: '8',  title: 'Grimlock',         imageUrl: '/coloring-pages/robots/robot-08.png', thumbnail: '/coloring-pages/robots/thumbs/robot-08.png' },
  { id: '9',  title: 'Ratchet',          imageUrl: '/coloring-pages/robots/robot-09.png', thumbnail: '/coloring-pages/robots/thumbs/robot-09.png' },
  { id: '10', title: 'Shockwave',        imageUrl: '/coloring-pages/robots/robot-10.png', thumbnail: '/coloring-pages/robots/thumbs/robot-10.png' },
  { id: '11', title: 'Hot Rod',          imageUrl: '/coloring-pages/robots/robot-11.png', thumbnail: '/coloring-pages/robots/thumbs/robot-11.png' },
  { id: '12', title: 'Wheeljack',        imageUrl: '/coloring-pages/robots/robot-12.png', thumbnail: '/coloring-pages/robots/thumbs/robot-12.png' },
  { id: '13', title: 'Devastator',       imageUrl: '/coloring-pages/robots/robot-13.png', thumbnail: '/coloring-pages/robots/thumbs/robot-13.png' },
  { id: '14', title: 'Sideswipe',        imageUrl: '/coloring-pages/robots/robot-14.png', thumbnail: '/coloring-pages/robots/thumbs/robot-14.png' },
  { id: '15', title: 'Skywarp',          imageUrl: '/coloring-pages/robots/robot-15.png', thumbnail: '/coloring-pages/robots/thumbs/robot-15.png' },
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
