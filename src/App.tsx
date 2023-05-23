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
    <main className="min-h-screen px-5 py-16 bg-black sm:px-10 md:px-20 font-inter">
      <section aria-labelledby="hide-scrollbar px-4">
        <header>
          <h1
            id="hide-scrollbar"
            className="mb-4 text-4xl font-bold text-white"
          >
            Hide Scrollbar
          </h1>
        </header>
        <p className="text-gray-200">
          You can grab the source code on{" "}
          <a
            href="https://https://github.com/bhendi-boi/hide-scrollbar"
            target="_blank"
            className="text-blue-400 cursor-pointer"
          >
            github
          </a>
          .
        </p>
        <p className="text-gray-200">
          Want to know how to do this ? You can find step by step tutorial on my{" "}
          <a
            href="https://https://github.com/bhendi-boi/hide-scrollbar"
            target="_blank"
            className="text-blue-400 cursor-pointer"
          >
            blog post
          </a>{" "}
          .
        </p>
      </section>
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
          <List hiddenScrollBar />
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

function List({ hiddenScrollBar }: { hiddenScrollBar?: boolean }) {
  return (
    <ul
      className={classNames(
        "flex gap-4 px-4 py-8 overflow-x-auto sm:gap-8 sm:px-8 md:px-12 md:gap-12",
        hiddenScrollBar && "h-[225px]",
        !hiddenScrollBar && "h-52"
      )}
    >
      {images.map((image) => {
        return <ImageCard {...image} />;
      })}
    </ul>
  );
}
