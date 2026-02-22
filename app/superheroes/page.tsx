import Link from 'next/link';
import ColoringGallery from '@/components/ColoringGallery';

const superheroPages = [
  { id: '1',  title: 'Spider-Man',        imageUrl: '/coloring-pages/superheroes/hero-01.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-01.png' },
  { id: '2',  title: 'Batman',            imageUrl: '/coloring-pages/superheroes/hero-02.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-02.png' },
  { id: '3',  title: 'Superman',          imageUrl: '/coloring-pages/superheroes/hero-03.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-03.png' },
  { id: '4',  title: 'Wonder Woman',      imageUrl: '/coloring-pages/superheroes/hero-04.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-04.png' },
  { id: '5',  title: 'Iron Man',          imageUrl: '/coloring-pages/superheroes/hero-05.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-05.png' },
  { id: '6',  title: 'Captain America',   imageUrl: '/coloring-pages/superheroes/hero-06.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-06.png' },
  { id: '7',  title: 'Thor',              imageUrl: '/coloring-pages/superheroes/hero-07.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-07.png' },
  { id: '8',  title: 'Hulk',             imageUrl: '/coloring-pages/superheroes/hero-08.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-08.png' },
  { id: '9',  title: 'Black Panther',     imageUrl: '/coloring-pages/superheroes/hero-09.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-09.png' },
  { id: '10', title: 'Flash',             imageUrl: '/coloring-pages/superheroes/hero-10.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-10.png' },
  { id: '11', title: 'Aquaman',           imageUrl: '/coloring-pages/superheroes/hero-11.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-11.png' },
  { id: '12', title: 'Green Lantern',     imageUrl: '/coloring-pages/superheroes/hero-12.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-12.png' },
  { id: '13', title: 'Doctor Strange',    imageUrl: '/coloring-pages/superheroes/hero-13.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-13.png' },
  { id: '14', title: 'Black Widow',       imageUrl: '/coloring-pages/superheroes/hero-14.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-14.png' },
  { id: '15', title: 'Hawkeye',           imageUrl: '/coloring-pages/superheroes/hero-15.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-15.png' },
  { id: '16', title: 'Ant-Man',           imageUrl: '/coloring-pages/superheroes/hero-16.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-16.png' },
  { id: '17', title: 'Scarlet Witch',     imageUrl: '/coloring-pages/superheroes/hero-17.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-17.png' },
  { id: '18', title: 'Vision',            imageUrl: '/coloring-pages/superheroes/hero-18.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-18.png' },
  { id: '19', title: 'Wolverine',         imageUrl: '/coloring-pages/superheroes/hero-19.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-19.png' },
  { id: '20', title: 'Storm',             imageUrl: '/coloring-pages/superheroes/hero-20.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-20.png' },
  { id: '21', title: 'Cyclops',           imageUrl: '/coloring-pages/superheroes/hero-21.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-21.png' },
  { id: '22', title: 'Nightcrawler',      imageUrl: '/coloring-pages/superheroes/hero-22.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-22.png' },
  { id: '23', title: 'Daredevil',         imageUrl: '/coloring-pages/superheroes/hero-23.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-23.png' },
  { id: '24', title: 'Captain Marvel',    imageUrl: '/coloring-pages/superheroes/hero-24.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-24.png' },
  { id: '25', title: 'Shazam',            imageUrl: '/coloring-pages/superheroes/hero-25.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-25.png' },
  { id: '26', title: 'Robin',             imageUrl: '/coloring-pages/superheroes/hero-26.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-26.png' },
  { id: '27', title: 'Green Arrow',       imageUrl: '/coloring-pages/superheroes/hero-27.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-27.png' },
  { id: '28', title: 'Supergirl',         imageUrl: '/coloring-pages/superheroes/hero-28.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-28.png' },
  { id: '29', title: 'Batgirl',           imageUrl: '/coloring-pages/superheroes/hero-29.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-29.png' },
  { id: '30', title: 'Ms. Marvel',        imageUrl: '/coloring-pages/superheroes/hero-30.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-30.png' },
  { id: '31', title: 'Silver Surfer',     imageUrl: '/coloring-pages/superheroes/hero-31.png', thumbnail: '/coloring-pages/superheroes/thumbs/hero-31.png' },
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
