import { useEffect, useState } from "react";
import { Entry } from '../types/entry';

const useImageMapper2 = (imgData: any, imageContext: any) => {

  const [imgsMapped, setImgsMapped] = useState<boolean>(false);
  
  // const mapImages = (imgData, images) => {
  //   for(let i = 0; i < imgData.length; i++) {
  //     var imgAssets = mapURLstoImages(images, imgData[i].key);
  //     for(let j = 0; i < mappings.length; j++) {
  //       mappings
  //     }
  //     imgData[i].images.small = imgAssets.filter(name => name.includes(mappings.small));
  //   } 
  // }

  // // Returns an array containing all the assets that pertain to a specific image
  // const mapURLstoImages = (images, key) => {
  //   return images.filter(name => name.includes(key))
  // }

  // // Maps 
  // const setURLs = (imgData, imgAssets) => {
    
  // }

  useEffect(() => {
    if (imageContext.imgsLoaded) {
      // mapImages(imgData, imageContext.images);
      setImgsMapped(true);
    }

  }, [imgData, imageContext])


  return { imgData , imgsMapped };

}

export default useImageMapper2;