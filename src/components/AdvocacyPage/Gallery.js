import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import images from '../../data/advocacy/gallery/advocacyImages';

const Gallery = () => {
  return (
    <CardColumns>
      {images.map((imageUrl, index) => (
        <Card key={`image-${index}`}>
          <Card.Img src={imageUrl} />
        </Card>
      ))}
    </CardColumns>
  );
};

export default Gallery;
