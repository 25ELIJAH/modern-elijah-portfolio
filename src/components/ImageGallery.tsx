
interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="image-gallery">
      {images.map((img, i) => (
        <img key={i} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
};

export default ImageGallery;
