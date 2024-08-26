'use client'
import Image from "next/image";
import Hero from "./components/Hero";
import Suggestion from "./components/Suggestion";
import Images from "./components/Images";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [filterImages, setFilterImage] = useState([])
  const handleFilter = async () =>{
    try {
      const res = await axios.get('https://api.unsplash.com/photos/?client_id=6_OXlV7zPBLfaXW4LnZGl3hGCgi738xG3nDyjfAZNpA'+"&per_page=30&page=1")
      setFilterImage(res.data)
    } catch (error) {
      
    } 
  }
  useEffect(() =>{
    handleFilter()
  },[])
  return (
    <main>
      <Hero setFilterImage={setFilterImage}/>
      <Suggestion />
      <Images filterImages={filterImages}/>
    </main>
  );
}
