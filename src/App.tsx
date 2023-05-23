import classNames from "classnames";
import ImageCard from "./components/ImageCard";
import { Image } from "./types";

const images: Image[] = [
  {
    src: "/photo1.webp",
    alt: "An image containing mountains and a lake.",
  },
  {
    src: "/photo2.webp",
    alt: "An image showing a bird with green background.",
  },
  {
    src: "/photo3.webp",
    alt: "An image showing some flowers.",
  },
  {
    src: "/photo4.webp",
    alt: "An image showing a forest during a sandstorm.",
  },
  {
    src: "/photo5.webp",
    alt: "An image showing mountains and a forest.",
  },
  {
    src: "/photo6.webp",
    alt: "An image showing a beach.",
  },
  {
    src: "/photo5.webp",
    alt: "An image showing a pine forest covered with snow.",
  },
];

function App() {
  return (
    <main className="min-h-screen px-5 py-16 sm:px-10 md:px-20 bg-fuchsia-500 font-inter">
      <section aria-labelledby="without-scrollbar" className="pt-16">
        <header>
          <h2
            id="without-scrollbar"
            className="px-2 text-2xl font-bold tracking-wide text-gray-100 uppercase"
          >
            With out Scrollbar
          </h2>
        </header>
        <div className="overflow-hidden h-52">
          <List isScrollBarVisible />
        </div>
      </section>
      <section aria-labelledby="with-scrollbar" className="pt-16">
        <header>
          <h2
            id="with-scrollbar"
            className="px-2 text-2xl font-bold tracking-wide text-gray-100 uppercase"
          >
            With Scrollbar
          </h2>
          <List />
        </header>
      </section>
    </main>
  );
}

export default App;

function List({ isScrollBarVisible }: { isScrollBarVisible?: boolean }) {
  return (
    <ul
      className={classNames(
        "flex gap-4 px-4 py-8 overflow-x-auto sm:gap-8 sm:px-8 md:px-12 md:gap-12",
        isScrollBarVisible && "h-[225px]",
        !isScrollBarVisible && "h-52"
      )}
    >
      {images.map((image) => {
        return <ImageCard {...image} />;
      })}
    </ul>
  );
}
