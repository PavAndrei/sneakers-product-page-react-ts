import { IImage } from "../interfaces";

import avatar from "./images/avatars/avatar.png";

import sneakersFull1 from "./images/full/image-product-1.jpg";
import sneakersThumbnail1 from "./images/thumbnails/image-product-1-thumbnail.jpg";

import sneakersFull2 from "./images/full/image-product-2.jpg";
import sneakersThumbnail2 from "./images/thumbnails/image-product-2-thumbnail.jpg";

import sneakersFull3 from "./images/full/image-product-3.jpg";
import sneakersThumbnail3 from "./images/thumbnails/image-product-3-thumbnail.jpg";

import sneakersFull4 from "./images/full/image-product-4.jpg";
import sneakersThumbnail4 from "./images/thumbnails/image-product-4-thumbnail.jpg";

export const Avatars = {
  avatar,
};

export const Images: IImage[] = [
  { id: "1", fullSize: sneakersFull1, thumbnailSize: sneakersThumbnail1 },
  { id: "2", fullSize: sneakersFull2, thumbnailSize: sneakersThumbnail2 },
  { id: "3", fullSize: sneakersFull3, thumbnailSize: sneakersThumbnail3 },
  { id: "4", fullSize: sneakersFull4, thumbnailSize: sneakersThumbnail4 },
];
