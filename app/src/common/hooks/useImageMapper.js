import { useEffect, useState } from "react";

const useImageMapper = (imgData, imageContext) => {

  const [imgsMapped, setImgsMapped] = useState(false)

  const mapImages = (imgData, images) => {
    for(let i = 0; i < imgData.length; i++) {
      imgData[i].url = images[i];
    } 
  }

  useEffect(() => {
    if (imageContext.imgsLoaded) {
      mapImages(imgData, imageContext.images)
    }

    setImgsMapped(true);

  }, [imgData, imageContext])


  return { imgData , imgsMapped };

}

export default useImageMapper;