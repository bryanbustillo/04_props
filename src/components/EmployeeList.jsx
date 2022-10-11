import React from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component{
    render(){
        const employees = [
            {
                name: 'Bryan',
                position: 'Manager',
            },
            {
                name: 'Ronal',
                position: 'CEO',
            },
            {
                name: 'Josue',
                position: 'Salesman',
            },
        ];
        
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <Employee name={employee.name} position={employee.position}/>
                    ))}             
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;