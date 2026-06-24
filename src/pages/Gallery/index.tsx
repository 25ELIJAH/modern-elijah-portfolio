import ImageGallery from '../../components/ImageGallery';

const images = [
  { src: '/images/gallery/photo1.jpg', alt: 'Gallery image 1' },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <ImageGallery images={images} />
    </section>
  );
};

export default Gallery;
