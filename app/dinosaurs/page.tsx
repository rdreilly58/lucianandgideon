import Link from 'next/link';
import ColoringGallery from '@/components/ColoringGallery';

const dinosaurPages = [
  {
    id: '1',
    title: 'T-Rex Roar!',
    imageUrl: 'https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2009/03/tyrannosaurus-rex-coloring-page.png',
  },
  {
    id: '2',
    title: 'Triceratops',
    imageUrl: 'https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2009/03/triceratops-coloring-page.png',
  },
  {
    id: '3',
    title: 'Stegosaurus',
    imageUrl: 'https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2009/03/stegosaurus-coloring-page.png',
  },
  {
    id: '4',
    title: 'Brachiosaurus',
    imageUrl: 'https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2009/03/brachiosaurus-coloring-page.png',
  },
  {
    id: '5',
    title: 'Velociraptor',
    imageUrl: 'https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2009/03/velociraptor-coloring-page.png',
  },
  {
    id: '6',
    title: 'Pterodactyl Flying',
    imageUrl: 'https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2009/03/pterodactyl-coloring-page.png',
  },
];

export default function DinosaursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-blue-400">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/">
            <button className="bg-white text-green-600 font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform mb-4">
              ← Back Home
            </button>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg mb-4">
            🦖🦕 DINOSAURS 🦕🦖
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
            Click any picture to print it out!
          </p>
        </div>

        {/* Gallery */}
        <div className="max-w-6xl mx-auto">
          <ColoringGallery 
            pages={dinosaurPages} 
            category="Dinosaurs"
            color="green"
          />
        </div>
      </div>
    </div>
  );
}
