import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';
function App() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            <Navbar />                {/* ← เห็นทุกหน้า */}
            <main className="flex-1">
                <Routes>                {/* ← เฉพาะตรงนี้ที่สลับตาม URL */}
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/movies/:id" element={<MovieDetail />} />
                    {/* :id คือตัวแปร — /movies/1, /movies/2, /movies/999 เข้า Route นี้หมด */}
                    <Route path="*" element={<NotFound />} />   {/* ← ดักทุกอย่างที่เหลือ ไว้ล่างสุด */}
                </Routes>
            </main>
            <Footer />                {/* ← เห็นทุกหน้า */}
        </div>
    );
}

export default App;