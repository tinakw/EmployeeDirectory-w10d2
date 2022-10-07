
export default function EmployeeListItem(props) {
  return (
    <div className="employeeListItem">
      <img src={props.img} alt="employeephoto" />
      <div className="employeeTitle">
        <span className="employeeName">{props.name}</span>
        <span className="employeeTitle">{props.title}</span>
      </div>
    </div>
  );
}
