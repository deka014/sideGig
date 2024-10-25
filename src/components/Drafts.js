import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import authHeader from '../services/authHeader'
const Drafts = () =>{

    const {userId} = useParams()
    const [draftsList, setDraftsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchDrafts(userId){
            setIsLoading(true)

            try {
                const response = await axios.get(`http://localhost:8083/expense/drafts/${userId}`, {headers: authHeader()})
                setDraftsList(response.data)
                console.log("DRAFTS ---> ", response.data)
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

        fetchDrafts(userId)
    }, [])

    if (isLoading) {
        return <div className="container ">
            <Loading />
        </div>
    }

    return (
        <div className="container ">
            <div>
                <h2 className='m-4'>Drafts of User with Id: {userId}</h2>
                <div class='row'>
                </div>
                <table class="table table-striped m-4 p-3">
                    <thead>
                        <tr>
                            <th>Expense ID</th>
                            <th>Category</th>
                            <th>Expense Date</th>
                            {/* <th>Receipt</th> */}
                            <th>Expense</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {draftsList.map((expense) => (
                            <tr>
                                <td>{expense.id}</td>
                                <td>{expense.category}</td>
                                <td>{expense.expenseDate}</td>

                                {/* <td>
                                    <a href={'/receipt/' + expense.id} target="_blank" class='btn btn-primary btn-lg'>
                                        View Receipt
                                    </a>
                                </td> */}

                                <td>
                                    <a href={'/expense-report/user/' + userId + '/' + expense.id} target="_blank" class='btn btn-primary btn-lg'>
                                        View Expense
                                    </a>
                                </td>

                                <td>{expense.status}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>

    )


}

export default Drafts