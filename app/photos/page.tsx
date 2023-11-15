'use client';
import axios from 'axios';
import { useState } from 'react';

const Page = () => {
  const [image, setImage] = useState<any | undefined>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(image);
    const body = new FormData();
    body.set('key', '121d3d326720cc4c37b6820cdfd2ecb4');
    body.append('image', image);

    const data = await axios.post('https://api.imgbb.com/1/upload', body);

    console.log(data);
  };

  // imageUploader(image)

  // const bufferImage = (e: any) => {
  //     const filereder = new FileReader();
  //     if (e.target.files) {

  //         filereder.onloadend = (res) => {
  //             console.log(res);
  //             // setImage(res.target?.result)
  //         }
  //         filereder.readAsDataURL(e.target.files[0])

  //     }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          id=""
          onChange={(e: any) => setImage(e.target.files?.[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
