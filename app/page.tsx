import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-lg mb-4 animate-bounce">
            🎨 Lucian & Gideon's Coloring Fun 🎨
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
            Pick a picture and print it out!
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Monster Trucks Card */}
          <Link href="/monster-trucks">
            <div className="bg-red-500 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform cursor-pointer border-8 border-yellow-400">
              <div className="text-center">
                <div className="text-8xl mb-4">🚗💨</div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
                  MONSTER TRUCKS
                </h2>
                <p className="text-xl text-yellow-100 font-bold">
                  Hot Wheels & Big Trucks!
                </p>
              </div>
            </div>
          </Link>

          {/* Dinosaurs Card */}
          <Link href="/dinosaurs">
            <div className="bg-green-500 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform cursor-pointer border-8 border-orange-400">
              <div className="text-center">
                <div className="text-8xl mb-4">🦖🦕</div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
                  DINOSAURS
                </h2>
                <p className="text-xl text-orange-100 font-bold">
                  T-Rex, Triceratops & More!
                </p>
              </div>
            </div>
          </Link>

          {/* Robots Card */}
          <Link href="/robots">
            <div className="bg-purple-500 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform cursor-pointer border-8 border-pink-400">
              <div className="text-center">
                <div className="text-8xl mb-4">🤖⚡</div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
                  ROBOTS
                </h2>
                <p className="text-xl text-pink-100 font-bold">
                  Cool Robots & Machines!
                </p>
              </div>
            </div>
          </Link>

          {/* Superheroes Card */}
          <Link href="/superheroes">
            <div className="bg-blue-600 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform cursor-pointer border-8 border-red-400">
              <div className="text-center">
                <div className="text-8xl mb-4">🦸‍♂️⚡</div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
                  SUPERHEROES
                </h2>
                <p className="text-xl text-red-100 font-bold">
                  Batman, Superman & More!
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Fun Footer */}
        <div className="text-center mt-16">
          <p className="text-3xl font-bold text-white drop-shadow-lg">
            ⭐ Click to Start Coloring! ⭐
          </p>
        </div>
      </div>
    </div>
  );
}
