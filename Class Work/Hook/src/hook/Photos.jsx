import axios from "axios";
import { useEffect, useState } from "react";

function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res);
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const box = photos.map((photo) => (
    <div key={photo.id} className="card">
      {photo.tittle}
      <img src={photo.url} />
    </div>
  ));
  return (
    <>
      <div className="pack">{box}</div>
    </>
  );
}

export default Photos;
