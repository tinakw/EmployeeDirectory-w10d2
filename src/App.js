import "./styles.css";

//import parent component
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import { useState } from "react";

//Import Data
import employeesArr from "./data";
console.log("this is employeesArr:", employeesArr);

//mapping over employeesArr which grabbed data from data. js to use for EmployeeListItem
// const employees = employeesArr.map((ele, idx) => {
//   return <HomePage key={idx} name={ele.name} title={ele.title} />;
// });

// console.log(employees);

export default function App() {
  const [employeeId, setEmployeeId]=useState(0)
  const [employeeList, setEmployeeList] = useState(employeesArr)
  console.log('what is employeeList state: ', employeeList);

  return (
    <div className="App">
      <HomePage className="homepage" setEmployeeId={setEmployeeId} />
      {/* <section className="cards">{employees}</section> */}
      <EmployeePage employeeId={employeeId} employeeList ={employeeList}  />

    </div>
  );
}
