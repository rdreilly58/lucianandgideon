import Link from 'next/link';
import ColoringGallery from '@/components/ColoringGallery';

const dinosaurPages = [
  { id: '1',  title: 'T-Rex Roar!',          imageUrl: '/coloring-pages/dinosaurs/dino-01.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-01.png' },
  { id: '2',  title: 'Triceratops',           imageUrl: '/coloring-pages/dinosaurs/dino-02.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-02.png' },
  { id: '3',  title: 'Stegosaurus',           imageUrl: '/coloring-pages/dinosaurs/dino-03.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-03.png' },
  { id: '4',  title: 'Brachiosaurus',         imageUrl: '/coloring-pages/dinosaurs/dino-04.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-04.png' },
  { id: '5',  title: 'Velociraptor',          imageUrl: '/coloring-pages/dinosaurs/dino-05.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-05.png' },
  { id: '6',  title: 'Pterodactyl',           imageUrl: '/coloring-pages/dinosaurs/dino-06.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-06.png' },
  { id: '7',  title: 'Ankylosaurus',          imageUrl: '/coloring-pages/dinosaurs/dino-07.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-07.png' },
  { id: '8',  title: 'Spinosaurus',           imageUrl: '/coloring-pages/dinosaurs/dino-08.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-08.png' },
  { id: '9',  title: 'Diplodocus',            imageUrl: '/coloring-pages/dinosaurs/dino-09.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-09.png' },
  { id: '10', title: 'Parasaurolophus',       imageUrl: '/coloring-pages/dinosaurs/dino-10.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-10.png' },
  { id: '11', title: 'Allosaurus',            imageUrl: '/coloring-pages/dinosaurs/dino-11.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-11.png' },
  { id: '12', title: 'Pachycephalosaurus',    imageUrl: '/coloring-pages/dinosaurs/dino-12.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-12.png' },
  { id: '13', title: 'Iguanodon',             imageUrl: '/coloring-pages/dinosaurs/dino-13.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-13.png' },
  { id: '14', title: 'Carnotaurus',           imageUrl: '/coloring-pages/dinosaurs/dino-14.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-14.png' },
  { id: '15', title: 'Compsognathus',         imageUrl: '/coloring-pages/dinosaurs/dino-15.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-15.png' },
  { id: '16', title: 'Baryonyx',              imageUrl: '/coloring-pages/dinosaurs/dino-16.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-16.png' },
  { id: '17', title: 'Protoceratops',         imageUrl: '/coloring-pages/dinosaurs/dino-17.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-17.png' },
  { id: '18', title: 'Dilophosaurus',         imageUrl: '/coloring-pages/dinosaurs/dino-18.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-18.png' },
  { id: '19', title: 'Ceratosaurus',          imageUrl: '/coloring-pages/dinosaurs/dino-19.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-19.png' },
  { id: '20', title: 'Maiasaura',             imageUrl: '/coloring-pages/dinosaurs/dino-20.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-20.png' },
  { id: '21', title: 'Oviraptor',             imageUrl: '/coloring-pages/dinosaurs/dino-21.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-21.png' },
  { id: '22', title: 'Gallimimus',            imageUrl: '/coloring-pages/dinosaurs/dino-22.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-22.png' },
  { id: '23', title: 'Deinonychus',           imageUrl: '/coloring-pages/dinosaurs/dino-23.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-23.png' },
  { id: '24', title: 'Mosasaurus',            imageUrl: '/coloring-pages/dinosaurs/dino-24.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-24.png' },
  { id: '25', title: 'Therizinosaurus',       imageUrl: '/coloring-pages/dinosaurs/dino-25.png', thumbnail: '/coloring-pages/dinosaurs/thumbs/dino-25.png' },
];

export default function DinosaursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-blue-400">
      <div className="container mx-auto px-4 py-8">
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
        <div className="max-w-6xl mx-auto">
          <ColoringGallery pages={dinosaurPages} category="Dinosaurs" color="green" />
        </div>
      </div>
    </div>
  );
}
