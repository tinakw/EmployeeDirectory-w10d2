import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

//create component
export default function HomePage(props) {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}