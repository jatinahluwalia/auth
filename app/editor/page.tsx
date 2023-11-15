'use client';

import React, { useState } from 'react';
import { ReactPhotoEditor } from 'react-photo-editor';
import 'react-photo-editor/dist/style.css';

function Page() {
  const [file, setFile] = useState<File | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [fileLink, setFileLink] = useState('');
  const [leftitems, setLeftitems] = useState(['1', '2', '3', '4', '5']);
  const [rightitems, setRightitems] = useState(['6', '7', '8', '9', '0']);

  // Show modal if file is selected
  const showModalHandler = () => {
    if (file) {
      setShowModal(true);
    }
  };

  // Hide modal
  const hideModal = () => {
    setShowModal(false);
  };

  // Save edited image
  const handleSaveImage = (editedFile: File) => {
    setFile(editedFile);

    const reader = new FileReader();
    reader.onloadend = (e) => {
      if (e.target?.result) {
        setFileLink(e.target.result.toString());
      }
    };
    reader.readAsDataURL(editedFile);
  };

  const setFileData = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e?.target?.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleLeftDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newRightitems = rightitems.filter(
      (item) => item !== e.dataTransfer.getData('text/plain'),
    );
    setRightitems(newRightitems);
    const newLeftitems = [...leftitems, e.dataTransfer.getData('text/plain')];
    setLeftitems(newLeftitems);
  };
  const handleRightDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <input type="file" onChange={(e) => setFileData(e)} multiple={false} />

      <button onClick={showModalHandler}>Edit</button>

      <ReactPhotoEditor
        open={showModal}
        onClose={hideModal}
        file={file}
        onSaveImage={handleSaveImage}
      />
      <a href={fileLink} download>
        Download
      </a>
      <div className="grid grid-cols-2 gap-5 rounded-md bg-blue-500 p-5 shadow-lg">
        <div className="rounded-md bg-white p-5 text-black">
          <h3>Left items.</h3>
          <div className="flex flex-col gap-5">
            {leftitems.map((i) => (
              <div
                key={i}
                draggable
                className="rounded-xl bg-black p-2 text-white"
                onDragStart={(e) =>
                  e.dataTransfer.setData('text/plain', `${i}`)
                }
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={handleLeftDrop}
              >
                {i}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md bg-white p-5 text-black">
          <h3>Right items.</h3>
          <div className="flex flex-col gap-5">
            {rightitems.map((i) => (
              <div
                key={i}
                draggable
                className="rounded-xl bg-black p-2 text-white"
                onDragStart={(e) =>
                  e.dataTransfer.setData('text/plain', `${i}`)
                }
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={handleRightDrop}
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
