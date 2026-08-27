// ************* week 4 file *************
// import React from "react";
// import Header from "./components/Header";
// import MovieList from "./components/MovieList";
// import Footer from "./components/Footer";
/*import Greeting from "./components/Greeting"
import Card from "./components/Card";*/
import Navbar from "./components/Navbar";
import Button from "./components/Button";
// function App() {
//   return (
//     <div>
//       <Header> </Header>
//       <MovieList> </MovieList>
//       <Greeting name="Picha" year={3} />
//       <Greeting name="Vi" year={2} />
//       <Greeting name="Min" year={4} />
//       <Footer> </Footer>
//     </div>
//   );
// }
//------------------------------------------------
// const students = [
//   { id: 1, name: 'ฝน', year: 3 },
//   { id: 2, name: 'เต้ย', year: 2 },
//   { id: 3, name: 'มายด์', year: 4 },
// ];

// function App() {
//   return (
//     <div>
//       <Card title="ประกาศ">
//         <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
//         <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
//       </Card>
//       <h1>รายชื่อนักศึกษา</h1>
//       {students.map((s) => (
//         <Greeting key={s.id} name={s.name} year={s.year} />
//       ))}
//     </div>
//   );
// }
// ----------------------------------------------
//* การบ้านเช็คแล้ว
// import ProfileCard from './components/ProfileCard';
// import './App.css';

// const members = [
//   { id: 1, name: 'ณัฐพิฌา อั้งจุดพันธ์', nickname: 'วายา',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'Genshin impact'] },
//   { id: 2, name: 'ธัญลักษณ์ มาสถิตทรัพย์', nickname: 'นีน่า',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'NCT 127'] },
//   { id: 3, name: 'VisTa Lengh', nickname: 'Vanish:)',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ออกกำลังกาย', 'ฟังเพลง'] }
// ];

// function App() {
//   return (
//     <div className="container">
//       <h1>สมาชิกกลุ่มของเรา</h1>
//       <div className="card-row">
//         {members.map((m) => (
//           <ProfileCard
//             key={m.id}
//             name={m.name}
//             nickname={m.nickname}
//             major={m.major}
//             favorites={m.favorites}
//           />
//         ))}
//       </div>
//     </div>
//   );
//* }
// ************* week 5 file 27/Aug/2026 *************
function App() {
  return (
    <div>

      {/* <h1 className="text-3xl font-bold text-cyan-600 underline">
       Hello Tailwind! 🎨
     </h1> */}
      <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
        <span className="text-xl font-bold text-white">🎬 MovieHub</span>
        <div className="flex gap-6 text-slate-300">
          <a href="#">หน้าแรก</a>
          <a href="#">หนังใหม่</a>
          <a href="#">รายการโปรด</a>
        </div>
      </nav>

      <div className="bg-slate-100 text-center">
        <h1 className="text-4xl font-bold text-slate-800">MovieHub</h1>
        <p className="text-lg text-slate-500">รวมหนังดีที่คุณห้ามพลาด</p>
        <p className="text-sm uppercase text-cyan-600 font-semibold">since 2026</p>
      </div>

      {/* แนวคิด mobile first เมื่อขยายใหญ่ใน Desktop จะขยับ ถ้าไม่ต้องการให้มันขยับก็ห่อหุ้มด้วย div */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* พื้นที่นี้เป็น grid มันคือ card */}
        <div className="grid grid-cols-3 gap-6 p-6">
          <div className="rounded-xl bg-white p-4 shadow">RED VELVET</div>
          <div className="rounded-xl bg-white p-4 shadow">GENSHIN</div>
          <div className="rounded-xl bg-white p-4 shadow">SPOTIFY</div>
          <div className="rounded-xl bg-white p-4 shadow">GL</div>
        </div>

        <div className="max-w-sm mx-auto mt-10 rounded-2xl border border-slate-200
                 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-bold text-slate-800">Interstellar</h2>
          <p className="mt-2 text-slate-500">การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ</p>
          <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1
                    text-sm font-semibold text-cyan-700">Sci-Fi</span>
        </div>

        <button className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white
                   transition hover:bg-cyan-700 hover:shadow-lg
                   focus:outline-none focus:ring-2 focus:ring-cyan-400">
          สมัครเรียน
        </button>

        <div className="flex gap-3 p-6">
          <Button>บันทึก</Button>
          <Button variant="danger">ลบ</Button>
          <Button variant="ghost">ยกเลิก</Button>
        </div>
      </div>
      {/* ปุ่มนอกที่ห่อหุ้มแนวคิด Mobilefirst
      <button className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white
                   transition hover:bg-cyan-700 hover:shadow-lg
                   focus:outline-none focus:ring-2 focus:ring-cyan-400">
        สมัครเรียน
      </button> */}

    </div> //ห่อหุ้มให้เป็น 1 ก้อนเพื่อต้องส่งไปก้อนเดียว

  );
}
// export default App;
