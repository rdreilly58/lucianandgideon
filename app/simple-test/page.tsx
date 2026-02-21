export default function SimpleTest() {
  const testImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png",
    "https://www.coloringpage.eu/wp-content/uploads/2013/01/Monster-Truck.gif"
  ];
  
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Image Test</h1>
      {testImages.map((url, i) => (
        <div key={i} className="mb-8">
          <p>Test {i + 1}:</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={`Test ${i}`} className="border-2 border-black" />
        </div>
      ))}
    </div>
  );
}
