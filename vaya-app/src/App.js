// import React from "react";
// import Header from "./components/Header";
// import MovieList from "./components/MovieList";
// import Footer from "./components/Footer";
import Greeting from "./components/Greeting"
import Card from "./components/Card";
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
import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 670710319, name: 'ณัฐพิฌา อั้งจุดพันธ์', nickname: 'วายา',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'Genshin impact'] },
  { id: 670710722, name: 'ธัญลักษณ์ มาสถิตทรัพย์', nickname: 'นีน่า',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'NCT 127'] }
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
