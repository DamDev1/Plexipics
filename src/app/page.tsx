'use client'
import Image from "next/image";
import Hero from "./components/Hero";
import Suggestion from "./components/Suggestion";
import Images from "./components/Images";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [filterImages, setFilterImage] = useState([])
  const [loading, setLoading] = useState(false)

  const handleFilter = async () =>{
    setLoading(true)
    try {
      const res = await axios.get('https://api.unsplash.com/photos/?client_id=6_OXlV7zPBLfaXW4LnZGl3hGCgi738xG3nDyjfAZNpA'+"&per_page=30&page=1")
      setFilterImage(res.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    } finally{
      setLoading(false)
    }
  }
  useEffect(() =>{
    handleFilter()
  },[])
  return (
    <main>
      <Hero setFilterImage={setFilterImage} setLoading={setLoading}/>
      <Suggestion setFilterImage={setFilterImage} setLoading={setLoading}/>
      <Images filterImages={filterImages} loading={loading}/>
    </main>
  );
}
