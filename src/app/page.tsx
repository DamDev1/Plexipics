'use client'
import Hero from "./components/Hero";
import Suggestion from "./components/Suggestion";
import Images from "./components/Images";
import axios from "axios";
import { useEffect, useState } from "react";

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export default function Home() {
  const [filterImages, setFilterImage] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFilter = async () => {
    setLoading(true);
    try {
      const res = await axios.get<UnsplashImage[]>(
        'https://api.unsplash.com/photos/?client_id=6_OXlV7zPBLfaXW4LnZGl3hGCgi738xG3nDyjfAZNpA&per_page=30&page=1'
      );
      setFilterImage(res.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFilter();
  }, []);

  return (
    <main>
      <Hero setFilterImage={setFilterImage} setLoading={setLoading} />
      <Suggestion setFilterImage={setFilterImage} setLoading={setLoading} />
      <Images filterImages={filterImages} loading={loading} />
    </main>
  );
}
