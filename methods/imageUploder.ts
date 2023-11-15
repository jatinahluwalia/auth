'use server';

import { imgbbUploader } from 'imgbb-uploader';

const imagekey = '121d3d326720cc4c37b6820cdfd2ecb4';
export const imageUploader = (imagePath: any) => {
  try {
    console.log(imagePath);

    // imgbbUploader(imagekey, imagePath)
    //     .then((response : any) => console.log(response))
    //     .catch((error : any) => console.error(error));
    imgbbUploader({
      apiKey: imagekey,
      base64string: imagePath,
      // name,
    })
      .then((response: any) => console.log(response))
      .catch((error: any) => console.error(error));
  } catch (error) {
    console.log(error);
  }
};
