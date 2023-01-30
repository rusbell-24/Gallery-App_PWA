import { useCallback, useEffect, useState } from "react";

export const useFetchImg = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [init, setInit] = useState(false);

  const peticion = useCallback(async () => {
    const accesKey = "client_id=kjSbjuaVvtgfxXjTgp2Bo_r-paaQD0lDmZLvm-eH5Xg";

    let route = `https://api.unsplash.com/photos/?per_page=30&${accesKey}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&per_page=30&${accesKey}`;
    }

    const res = await fetch(route);
    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  });

  useEffect(() => {
    peticion();
  }, [input, peticion, init]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput(e.target[0].value);

    e.target.reset();
  };

  const handleInit = () => {
    setInput("");
    setInit(!init);
  };

  return [images, handleSubmit, handleInit];
};
