import { Image } from "../types";

const ImageCard = ({ src, alt }: Image) => {
  return (
    <li className="overflow-hidden bg-gradient-to-br from-gray-50/30 to-gray-300 via-gray-100/50 shrink-0 rounded-xl">
      <img
        src={src}
        alt={alt}
        className="object-cover aspect-[7/5] h-full w-full"
      />
    </li>
  );
};

export default ImageCard;
