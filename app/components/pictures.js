// components/PhotoGallerySection.js
import Image from "next/image";

const photoData = [
  {
    src: "/photo/picture-1.png",
    alt: "James Han's pictures",
    caption: "Presenting at Samung Research America.",
  },
  {
    src: "/photo/picture-2.jpg",
    alt: "James Han's pictures",
    caption: "Intern picture at Amazon.",
  },
  {
    src: "/photo/picture-3.jpg",
    alt: "James Han's pictures",
    caption: "Intern picture at Samsung Research America, NEON Team.",
  },
];

export default function PhotoGallerySection() {
  return (
    <div className="container mx-auto md:px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
        Moments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoData.map((photo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                className="object-contain w-full h-full object-top"
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={400}
              />
            </div>
            <hr />
            <div className="p-4">
              <p className="text-sm text-gray-600 italic">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
