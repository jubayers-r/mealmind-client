import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imgs = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png,svg,webp}", {
  eager: true,
  import: "default",
});
const images = Object.values(imgs);

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="space-y-3 my-7">
        <h3 className="text-3xl font-bold text-center dark:text-white">
          Gallery
        </h3>
        <p className="text-xl text-center dark:text-white">
          Click for fullscreen slideshow view.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-2 w-10/11 mx-auto">
        {images.map((img, i) => (
          <img
            src={img}
            key={i}
            className="h-100 object-cover w-full"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        slides={images.map((img) => ({ src: img }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}
