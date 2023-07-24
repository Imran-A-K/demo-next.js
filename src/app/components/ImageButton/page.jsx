const { default: Image } = require("next/image");

export function ImageButton({ active, image, setActiveImage }) {
  return (
    <Image
      src={image}
      alt={`product-singular-image ${image}`}
      width={300}
      height={300}
      onClick={() => setActiveImage(image)}
      className={`h-20 w-20 p-1 cursor-pointer rounded-md border-2 ${
        active ? "border-gray-400" : "border-transparent"
      }`}
    />
  );
}
