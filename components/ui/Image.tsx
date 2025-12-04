import { ComponentProps } from "react";

interface ImageProps extends Omit<ComponentProps<"img">, "src" | "srcSet"> {
  src: string;
  alt: string;
}

export default function Image({ src, alt, className, ...props }: ImageProps) {
  // Extract directory and filename
  const lastSlash = src.lastIndexOf("/");
  const directory = src.substring(0, lastSlash + 1);
  const filename = src.substring(lastSlash + 1);
  
  // Remove file extension and get base name
  const baseName = filename.replace(/\.(png|jpg|jpeg|webp)$/i, "");
  const extension = filename.match(/\.(png|jpg|jpeg|webp)$/i)?.[0] || ".png";

  // Generate srcset for 1x, 2x, 3x versions
  const srcSet = `${directory}${baseName}${extension} 1x, ${directory}${baseName}@2x${extension} 2x, ${directory}${baseName}@3x${extension} 3x`;

  return (
    <img
      src={`${directory}${baseName}${extension}`}
      srcSet={srcSet}
      alt={alt}
      className={className}
      {...props}
    />
  );
}

