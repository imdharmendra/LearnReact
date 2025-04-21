import axios from "axios";
import { useEffect, useState } from "react";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        console.log(res);
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const list = albums.map((album) => (
    <div key={album.id} className="card">
      <h2>
        Album {album.id} : {album.title}
      </h2>
    </div>
  ));
  return (
    <>
      <div>{list}</div>
    </>
  );
}

export default Albums;
