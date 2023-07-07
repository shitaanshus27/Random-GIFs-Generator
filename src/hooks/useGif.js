import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState("");

  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag ? tagMemeUrl : randomUrl);
    const imageSource = data.data.images.downsized_medium.url;
    console.log(data);
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData("car");
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
