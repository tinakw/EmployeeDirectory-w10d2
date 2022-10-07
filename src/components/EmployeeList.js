
import EmployeeListItem from "./EmployeeListItem";
import employeesArr from "../data.js";

const employees = employeesArr.map((ele, idx) => {
  
  return (
    <EmployeeListItem
      key={idx}
      name={ele.name}
      title={ele.title}
      img={ele.img}
    />
  );
});

//create the component
export default function EmployeeList(props) {
  return <div className="employeeList">{employees}</div>;
}
