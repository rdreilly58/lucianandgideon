'use client';

import Image from 'next/image';

interface ColoringPage {
  id: string;
  title: string;
  imageUrl: string;
  thumbnail?: string;
}

interface ColoringGalleryProps {
  pages: ColoringPage[];
  category: string;
  color: 'red' | 'green';
}

export default function ColoringGallery({ pages, category, color }: ColoringGalleryProps) {
  const handlePrint = (imageUrl: string, title: string) => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print: ${title}</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
              @media print {
                body { padding: 0; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="no-print" style="margin-bottom: 20px;">
              <h2>${title}</h2>
              <button onclick="window.print()" style="padding: 15px 30px; font-size: 18px; background: #4CAF50; color: white; border: none; border-radius: 8px; cursor: pointer;">
                🖨️ Print Now!
              </button>
            </div>
            <img src="${imageUrl}" alt="${title}" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const borderColor = color === 'red' ? 'border-red-400' : 'border-green-400';
  const buttonBg = color === 'red' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600';

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {pages.map((page) => (
        <div
          key={page.id}
          className={`bg-white rounded-2xl p-4 shadow-xl hover:scale-105 transition-transform cursor-pointer border-4 ${borderColor}`}
          onClick={() => handlePrint(page.imageUrl, page.title)}
        >
          <div className="aspect-square relative mb-3 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={page.thumbnail || page.imageUrl}
              alt={page.title}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <h3 className="text-center font-bold text-gray-800 text-sm md:text-base">
            {page.title}
          </h3>
          <button
            className={`w-full mt-2 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm md:text-base ${buttonBg}`}
          >
            🖨️ Print!
          </button>
        </div>
      ))}
    </div>
  );
}
