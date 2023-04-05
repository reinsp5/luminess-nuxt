export interface SlideshowImage {
  _id: string;
  name: string;
  photo: Photo;
}

interface Photo {
  _id: string;
  src: string;
  fileType: string;
  fileSize: number;
  fileName: string;
  width: number;
  height: number;
  altText: string;
  description: string;
}