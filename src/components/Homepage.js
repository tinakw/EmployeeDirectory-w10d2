import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

//create component
export default function HomePage(props) {
  console.log('what are props in the homepage component', props);
  
  return (
    <div className="homepage">
      
      <Header />
      <SearchBar />
      <EmployeeList setEmployeeId={props.setEmployeeId}/>
    </div>
    
  );
}