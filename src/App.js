import "./styles.css";

//import parent component
import HomePage from "./components/HomePage";

//Import Data
import employeesArr from "./data";
console.log("this is employeesArr:", employeesArr);

//mapping over employeesArr which grabbed data from data. js to use for EmployeeListItem
// const employees = employeesArr.map((ele, idx) => {
//   return <HomePage key={idx} name={ele.name} title={ele.title} />;
// });

// console.log(employees);

export default function App() {
  return (
    <div className="App">
      <HomePage className="homepage" />
      {/* <section className="cards">{employees}</section> */}
      <div className="employeePage"></div>
    </div>
  );
}
