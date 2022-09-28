import Header from "./Header";
import Search from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function Home() {
  return (
    <>
      <Header title="Employee Directory" />
      <Search />
      <EmployeeList />
    </>
  );
}