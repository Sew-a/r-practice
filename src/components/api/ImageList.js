import React, { useState } from "react";
import "../sass/ImageList.scss";
import Modal from "./Modal";

export const ImageList = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const images = props.images.map((image) => {
    return (
      <div key={image.id}>
        <img alt={image.description} src={image.urls.regular} />
      </div>
    );
  });

  return (
    <>
      <div className="images-list">{images}</div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </>
  );
};
