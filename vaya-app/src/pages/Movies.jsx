import { Link } from 'react-router-dom';
import { movies } from '../data/data';
import SearchBox from '../components/SearchBox.jsx';
import {useState} from 'react';
import GenreBox from '../components/GenreBox.jsx';

const GENRES = [...new Set(movies.map(m => m.genre))]; //ดึง genre ทั้งหมดจาก movies แล้วเอาไปใส่ใน Set เพื่อให้ไม่ซ้ำกัน แล้วค่อยแปลงกลับเป็น Array ด้วย [... ]

function Movies() {
const [query,setQuery] = useState(''); //เอาไว้หาชื่อหนัง
const [genre,setGenre] = useState('all'); //เอาไว้หาแนว

// const shown = movies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));//ทำให้ตัวอักษรทั้งหมดเป็นตัวเล็ก ให้มันเจอและเทียบกันได้ //หาส่วนไหนก็ได้ใน title ที่ตรงกับ query แต่ถ้าอยากให้ตรงกับตัวหน้าเท่านั้น ต้องใช้ startsWith() แทน includes() และต้องแบ่งด้วยช่องว่างก่อน
const q = query.trim().toLowerCase(); //ตัดช่องว่างด้านหน้าและหลังออกและเปลี่ยนให้ตัวเล็กหมด กันคนเผลใส่ช่องว่างแล้วหาไม่เจอ
const shown = movies.filter(m => m.title.toLowerCase().split(' ').some(word => word.startsWith(q)) && (genre === 'all' || m.genre === genre));//แบ่งด้วยช่องว่าง เฉพาะตรงกับตัวหน้า Search = Filter 

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>

      <SearchBox query={query} setQuery={setQuery}/>
      <GenreBox genre={genre} onGenreChange={setGenre} genres = {GENRES}/>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map(m => (
          <Link key={m.id} to={`/movies/${m.id}`}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                           transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
            <p className="mt-1 text-sm text-slate-500">ปี {m.year} · {m.genre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;