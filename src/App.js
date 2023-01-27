import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [images, setImages] = useState([]);

  const Peticion = useCallback(async () => {
    const accesKey = "client_id=kjSbjuaVvtgfxXjTgp2Bo_r-paaQD0lDmZLvm-eH5Xg";

    const route = `https://api.unsplash.com/photos/?per_page=30&${accesKey}`;

    const res = await fetch(route);
    const data = await res.json();

    setImages(data);
  });

  useEffect(() => {
    Peticion();
  }, []);

  return (
    <div className="App row m-2">
      {images.map((img) => {
        return (
          <div key={img.id} className="col">
            <Card urlImg={img.urls.regular} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
