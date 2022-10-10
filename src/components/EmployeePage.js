import Header2 from "./Header2"
import EmployeeListItem from "./EmployeeListItem"


export default function EmployeePage(props) {
    console.log('props employee', props.employeeId, props.employeeList)
    // Find the employee in the employeeList arr that has the same id as the one we clicked on
    let singleEmployee = props.employeeList.find(function (employee) {
        return employee.id === props.employeeId
    })
    console.log('who is the employee being clicked on', singleEmployee)
    return (
        <div className="employeePage">
           
                <Header2 />
           
            {singleEmployee !== undefined ?
                <div className="employeeList" >

                    <div className="photoTitleContainer">
                        <img className="singleEmployeePhoto" src={singleEmployee.img} alt="employeePhoto" />
                        {/* <div className="employee"> */}
                        <div className="employeeTitle">
                            <span className="employeeName">{singleEmployee.name}</span>
                            <span className="employeeTitle">{singleEmployee.title}</span>
                        </div>
                    </div>

                    <div className="employeeListContact" >

                        <div className="contactInformationContainer">
                            <div>
                                <p >Call Office</p>
                                <span className="employeeOffice">{singleEmployee.office}</span>
                            </div>
                            <img src="/chevron-right.png" />
                        </div>

                        <div className="contactInformationContainer">
                            <div>
                                <p >Call Mobile</p>
                                <span className="employeeOffice">{singleEmployee.mobile}</span>
                            </div>
                            <img src="/chevron-right.png" />
                        </div>

                        <div className="contactInformationContainer">
                            <div>
                                <p >SMS</p>
                                <span className="employeeOffice">{singleEmployee.sms}</span>
                            </div>
                            <img src="/chevron-right.png" />
                        </div>

                        <div className="contactInformationContainer">
                            <div>
                                <p >Email</p>
                                <span className="employeeOffice">{singleEmployee.email}</span>
                            </div>
                            <img src="/chevron-right.png" />
                        </div>
                    </div>

                </div> : null
            }

        </div>

    );
}

