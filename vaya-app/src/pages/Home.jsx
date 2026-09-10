
// import React from 'react';
// import { Link } from 'react-router-dom';
import { movies } from '../data/data.js';
import MovieCard from '../components/MovieCard.jsx'
import MovieGallery from '../components/MovieGallery.jsx';
function Home() {
  // File week
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
      <div classname="mx-auto mt-8 max-w-5xl">
        {movies.slice(0, 3).map(m => (
          <MovieCard title={m.title} year={m.year}></MovieCard>
          //  <MovieCard title = "KHOMKHLANG the series" year = {2026}></MovieCard>
        ))}
      </div>
      <h2 classname="mx-8 text-ml font-bold text-slate">ดูหนังเพิ่มเติม</h2>
        <MovieGallery/>
    </div>
  );
}

export default Home;