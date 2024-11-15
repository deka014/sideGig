import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import authHeader from '../services/authHeader'

const Employees = () => {

    const [employeesList, setEmployeesList] = useState([])
    const { id, mngrId } = useParams()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("testing")
        async function fetchAllEmployees() {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:8083/user `, {headers: authHeader()}
              )
                console.log(response,"this is the response")
                setEmployeesList(response.data)
                console.log("EMPLOYEES ---> ", response.data)
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    // Handle 403 Unauthorized error
                    window.location.href = '/'
                }
                // You can display a message to the user or redirect them to the login page
                else if (error.response && error.response.status === 401) {
                    // alert('Not Authenticated ')
                    window.location.href = '/login'
                } else {

                    console.error('Error fetching expenses data:', error)
                }
            }finally {
                setIsLoading(false); // End loading
            }
        }

        async function fetchEmployeeById(id) {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:8083/user/${id}`,{headers: authHeader()})
                setEmployeesList([response.data]);
                console.log("EMPLOYEE BY ID ---> ", response.data)
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    // Handle 403 Unauthorized error
                    window.location.href = '/'
                }
                // You can display a message to the user or redirect them to the login page
                else if (error.response && error.response.status === 401) {
                    // alert('Not Authenticated ')
                    window.location.href = '/login'
                } else {

                    console.error('Error fetching expenses data:', error)
                }
            }finally {
                setIsLoading(false); // End loading
            }
        }

        // async function fetchEmployeesOfManager(mngrId) {
        //     setIsLoading(true);
        //     try {
        //         const response = await axios.get(`http://localhost:8083/user/manager/${mngrId}`)
        //         setEmployeesList(response.data)
        //         console.log("EMPLOYEES UNDER MANAGER ---> ", response.data)
        //     } catch (error) {
        //         if (error.response && error.response.status === 403) {
        //             // Handle 403 Unauthorized error
        //             window.location.href = '/'
        //         }
        //         // You can display a message to the user or redirect them to the login page
        //         else if (error.response && error.response.status === 401) {
        //             // alert('Not Authenticated ')
        //             window.location.href = '/login'
        //         } else {

        //             console.error('Error fetching expenses data:', error)
        //         }
        //     }finally {
        //         setIsLoading(false); // End loading
        //     }
        // }

        if (id) {
            fetchEmployeeById(id)
        } else {
            fetchAllEmployees()
        }
    }, [id, mngrId])

    if (isLoading) {
        return <div className="container ">
            <Loading />
        </div>
    }

    return (
        <div className="container ">
            <div>
                <h2 className='m-4'>Employees: </h2>

                <table class="table table-striped m-4 p-3">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Role</th>
                            <th>Manager Id</th>
                            <th>Expenses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeesList.map((employee) => (
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department}</td>
                                <td>{employee.role}</td>
                                <td>{employee.role === 'EMPLOYEE' ?
                                    employee.managerId :
                                    'N/A'
                                }</td>
                                <td>
                                    <a href={'/expense/' + employee.id} class='btn btn-primary btn'>
                                        View Expenses
                                    </a>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>

    )
}

export default Employees