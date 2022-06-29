// imports
import { Image } from "../class/Image.js";
import { Video } from "../class/Video.js";

export function mediaFactory(mediaInfo, mediaList, photographerId) {
  let newMedia = {};

  // if image is strictly unequal to undefined
  if (mediaInfo.image !== undefined) {
    // create new image
    newMedia = new Image(
      mediaInfo.title,
      mediaInfo.likes,
      mediaInfo.image,
      mediaInfo.video,
      mediaInfo.date,
      photographerId,
      mediaList
    );
  } else {
    // create new video
    newMedia = new Video(
      mediaInfo.title,
      mediaInfo.likes,
      mediaInfo.image,
      mediaInfo.video,
      mediaInfo.date,
      photographerId,
      mediaList
    );
  }

  return newMedia;
}
