// import EmployeeImg from "./EmployeeImg";

export default function EmployeeListItem({ img, name, role, division}) {
  return (
    <div className="list-item">
      {/* <EmployeeImg img={img} alt={name} /> */}
      <div className="content">
        <h4>{name}</h4>
        <p>{role}</p>
        <p>{division}</p>
      </div>
    </div>
  );
}
