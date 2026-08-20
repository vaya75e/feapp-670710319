
// เขียนได้หลายแบบ
// function Greeting(props) {
//   return <h2>สวัสดี {props.name}! คุณเรียนอยู่ชั้นปี {props.year}</h2>;
// }

// export default Greeting;

function Greeting({ name , year}) {
  return <h2>สวัสดี {name}! คุณเรียนอยู่ชั้นปี {year}</h2>;
}

export default Greeting;