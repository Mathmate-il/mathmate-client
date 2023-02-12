export interface RoundedImageProps {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
}

// eslint-disable-next-line object-curly-newline
function RoundedImage({ src, alt, width, height }: RoundedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        borderRadius: '50%',
        width,
        height,
      }}
    />
  );
}

export default RoundedImage;
