import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import authHeader from '../services/authHeader'

const ExpenseReport = () => {
  const [expenseData, setExpenseData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [receiptFileType, setReceiptFileType] = useState('')

  const { expenseId, userId } = useParams()

  const [receiptData, setReceiptData] = useState({
    receiptFile: null,
  })

  const handleOnFileChange = (event) => {
    event.preventDefault()

    if (event.target.name === 'receiptFile' && event.target.files[0]) {
      setReceiptData({
        [event.target.name]: event.target.files[0],
      })
    }
  }

  const handleUpdateRecipt = (event) => {
    event.preventDefault()
    const formData = new FormData()
    if (receiptData.receiptFile) {
      console.log('rinn')
      formData.append('file', receiptData.receiptFile)
      console.log()
      axios
        .put(
          `http://localhost:8083/expense/save/${expenseId}/${expenseData.receipt.id}`,
          formData,
          {
            headers: authHeader(),
          }
        )
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          window.location.href = `/expense-report/user/${userId}/${expenseId}`
        })
    } else {
      window.location.href = `/expense-report/user/${userId}/${expenseId}`
    }
  }

  const handleAddRecipt = (event) => {
    event.preventDefault()
    const formData = new FormData()
    if (receiptData.receiptFile) {
      formData.append('file', receiptData.receiptFile)
      console.log()
      axios
        .post(`http://localhost:8083/expense/save/${expenseId}`, formData, {
          headers: authHeader(),
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          window.location.href = `/expense-report/user/${userId}/${expenseId}`
        })
    } else {
      window.location.href = `/expense-report/user/${userId}/${expenseId}`
    }
  }

  // const handleApproval = (event) => {
  //   event.preventDefault()

  //   axios
  //     .put('http://localhost:8083/expense/updateStatus', expenseData, {
  //       params: {
  //         status: 'APPROVED', // Set the status to APPROVED
  //       },
  //     })
  //     .then((response) => {
  //       console.log('Expense Approved successfully:', response.data)
  //       window.location.reload()
  //       // Handle successful response
  //     })
  //     .catch((error) => {
  //       console.error('Error updating expense:', error)
  //       // Handle error
  //     })
  // }

  // const handleRejection = (event) => {
  //   event.preventDefault()

  //   axios
  //     .put('http://localhost:8083/expense/updateStatus', expenseData, {
  //       params: {
  //         status: 'REJECTED', // Set the status to APPROVED
  //       },
  //     })
  //     .then((response) => {
  //       console.log('Expense rejected successfully:', response.data)
  //       window.location.reload()
  //     })
  //     .catch((error) => {
  //       console.error('Error updating expense:', error)
  //       // Handle error
  //     })
  // }

  const handleDelete = (event) => {
    event.preventDefault()

    axios
      .delete(`http://localhost:8083/expense/delete/${expenseId}`, {
        headers: authHeader(),
      })
      .then((response) => {
        const exp_Id = response.data.id
        alert(`Expense with id: ${exp_Id} deleted successfully`)
        window.location.href = `/expense/${userId}`
      })
      .catch((error) => {
        console.error('Error updating expense:', error)
        // Handle error
      })
  }

  // const handleUpdateRecipt = (event) => {
  //   event.preventDefault()

  //   axios
  //     .put(`http://localhost:8083/expense/save/${expenseId}/${expenseData.receipt.id}`, formData , {
  //       headers: authHeader(),
  //     })
  //     .then((response) => {
  //       console.log(response)

  //       // Handle successful response
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //     .finally(() => {
  //       window.location.href = `/employee-reports/${id}`
  //     })
  // }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .put(`http://localhost:8083/expense/submit/${expenseId}`,
      { headers: authHeader() })
      .then((response) => {
        const exp_Id = response.data.id
        alert(`Expense with id: ${exp_Id} submitted successfully`)
        window.location.reload()
      })
      .catch((error) => {
        console.error('Error submitting expense:', error)
        // Handle error
      })
  }

  const handleEdit = (event) => {
    event.preventDefault()
    window.location.href = `/edit-expense/user/${userId}/${expenseId}`
  }

  useEffect(() => {
    async function fetchExpense(expenseId) {
      try {
        const response = await axios.get(
          `http://localhost:8083/expense/exp-id/${expenseId}`,
          { headers: authHeader() }
        )
        setExpenseData(response.data)
        console.log('EXPENSE ---> ', response.data)
      } catch (error) {
        if (error.response && error.response.status === 403) {
          // Handle 403 Unauthorized error
          window.location.href = '/'
        }
        // You can display a message to the user or redirect them to the login page
        else if (error.response && error.response.status === 401) {
          // alert('Not Authenticated ')
          // window.location.href = '/login'
        } else {
          console.error('Error fetching expense data:', error)
        }
      } finally {
        setIsLoading(false) // End loading
      }
    }

    fetchExpense(expenseId)
  }, [])

  if (isLoading) {
    return (
      <div className='container '>
        <Loading />
      </div>
    )
  }

  //   return (
  //     <div className='container '>
  //       <div>
  //         <h2 className='m-4'>Expense: </h2>

  //         <div class='d-flex flex-column m-4 p-3'>
  //           <table class='table table-bordered'>
  //             <tbody>
  //               <tr>
  //                 <th scope='row'>Expense ID</th>
  //                 <td>{expenseData.id}</td>
  //               </tr>
  //               <tr>
  //                 <th scope='row'>Expense Category</th>
  //                 <td>{expenseData.category}</td>
  //               </tr>
  //               <tr>
  //                 <th scope='row'>Expense Date</th>
  //                 <td>{expenseData.expenseDate}</td>
  //               </tr>
  //               <tr>
  //                 <th scope='row'>Expense Status</th>
  //                 <td>{expenseData.status}</td>
  //               </tr>
  //               <tr>
  //                 <th scope='row'>Submit Status</th>
  //                 <td>
  //                   {expenseData.submitStatus === 'TRUE'
  //                     ? 'SUBMITTED'
  //                     : 'NOT SUBMITTED'}
  //                 </td>
  //               </tr>
  //               <tr>
  //                 <th scope='row'>Expense Amount</th>
  //                 <td>{expenseData.amount}</td>
  //               </tr>
  //               <tr>
  //                 <th scope='row'>Expense Description</th>
  //                 <td>{expenseData.description}</td>
  //               </tr>
  //               <tr>
  //                 <th scope='row'>Receipt</th>
  //                 <td>
  //                   {expenseData.receipt ? (
  //                     expenseData.receipt.fileType === 'pdf' ? (
  //                       <iframe
  //                         src={`data:application/pdf;base64,${expenseData.receipt.receiptFile}`}
  //                         width={600}
  //                         height={700}
  //                         frameBorder='0'
  //                       ></iframe>
  //                     ) : (
  //                       <img
  //                         src={`data:application/jpeg;base64,${expenseData.receipt.receiptFile}`} // Ensure this is a valid URL or base64 string
  //                         width={500}
  //                         height={400}
  //                         alt='Receipt' // Add alt text for accessibility
  //                       />
  //                     )
  //                   ) : (
  //                     <strong class='text-center'>File Not Found</strong>
  //                   )}
  //                 </td>
  //               </tr>

  //               <tr>
  //                 <th scope='row'>Manager Comment</th>
  //                 <td>{expenseData.mgrComment}</td>
  //               </tr>
  //             </tbody>
  //           </table>
  //         </div>

  //         <div className='row'>
  //           <div className='col-md-6'>
  //             <button
  //               type='button'
  //               onClick={handleDelete}
  //               className='btn btn-success mb-3'
  //             >
  //               Delete
  //             </button>
  //           </div>
  //         </div>

  //         {expenseData.submitStatus === 'FALSE' && (
  //           <div>
  //             <div className='row'>
  //               <div className='col-md-6'>
  //                 <button
  //                   type='button'
  //                   onClick={handleSubmit}
  //                   className='btn btn-success mb-3'
  //                 >
  //                   Submit
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   )

  // }

  return (
    //use bootstrap to create a card with the above details
    <div>
      <div class='row g-2 overflow-hidden'>
        <div class='col-md-6'>
          <div class='lc-block mb-5'>
            <h4>
              {/* Employee Details for <span className='mark'>{employee.name}</span> */}{' '}
              Expense Details
            </h4>
          </div>
          <div class='lc-block1'>
            <table class='table table-striped' align='center'>
              <tbody>
                <tr>
                  <th>Expense ID</th>
                  <td>{expenseData.id}</td>
                </tr>
                <tr>
                  <th>Expense Category</th>
                  <td>{expenseData.category}</td>
                </tr>
                <tr>
                  <th>Expense Date</th>
                  <td>{expenseData.expenseDate}</td>
                </tr>
                <tr>
                  <th>Expense Status</th>
                  <td>{expenseData.status}</td>
                </tr>
                <tr>
                  <th>Submit Status</th>
                  <td>
                    {expenseData.submitStatus === 'TRUE'
                      ? 'SUBMITTED'
                      : 'NOT SUBMITTED'}
                  </td>
                </tr>
                <tr>
                  <th>Expense Amount</th>
                  <td>{expenseData.amount}</td>
                </tr>
                <tr>
                  <th>Expense Description</th>
                  <td>{expenseData.description}</td>
                </tr>

                <tr>
                  <th>Manager Comment</th>
                  <td>
                    {expenseData.mgrComment != ''
                      ? 'No comments'
                      : expenseData.mgrComment}
                  </td>
                </tr>

                <tr>
                  <th>Update</th>
                  <td>
                    <a
                      name=''
                      id=''
                      class='btn btn-info'
                      href={`/employee-payroll/`}
                      role='button'
                    >
                      Click Here
                    </a>
                  </td>
                </tr>

                <tr>
                  <th>Submit</th>
                  <td>
                    {expenseData.submitStatus === 'FALSE' ? (
                      <a
                        name=''
                        id=''
                        class='btn btn-warning'
                        role='button'
                        onClick={handleSubmit}
                      >
                        Click Here
                      </a>
                    ) : (
                      <button
                        type='button'
                        name=''
                        id=''
                        class='btn btn-primary'
                        disabled
                      >
                        Already Submitted
                      </button>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>Delete</th>
                  <td>
                    <input
                      name=''
                      id=''
                      class='btn btn-danger'
                      type='button'
                      value='Click Here'
                      onClick={handleDelete}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class='col-md-6'>
          <div class='lc-block mb-5'>
            <h4>
              {/* Employee Details for <span className='mark'>{employee.name}</span> */}{' '}
              Attachments
            </h4>
          </div>
          <div class='accordion' id='accordionExample'>
            <div class='accordion-item'>
              <h2 class='accordion-header' id='headingOne'>
                <button
                  class='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                >
                  Recipts Attached
                </button>
              </h2>
              <div
                id='collapseOne'
                class='accordion-collapse collapse show'
                aria-labelledby='headingOne'
                data-bs-parent='#accordionExample'
              >
                {/* <div class='accordion-body'>
                    This is the first item's accordion body.
                  </div> */}
              </div>
            </div>
          </div>
          <div class='lc-block1 h-100'>
            {expenseData.receipt ? (
              expenseData.receipt.fileType === 'pdf' ? (
                <iframe
                  src={`data:application/pdf;base64,${expenseData.receipt.receiptFile}`}
                  width='100%'
                  height='50%'
                  frameBorder='0'
                ></iframe>
              ) : (
                <img
                  src={`data:application/jpeg;base64,${expenseData.receipt.receiptFile}`} // Ensure this is a valid URL or base64 string
                  width='100%'
                  height='50%'
                  alt='Receipt' // Add alt text for accessibility
                />
              )
            ) : (
              // <strong className='text-center'>File Not Found</strong>
              <p class='lead my-5'>No Attachments Found</p>
            )}
            <div>
              <input
                type='file'
                name='receiptFile'
                class='form-control my-4'
                id='receiptFile'
                onChange={handleOnFileChange}
              />
              {expenseData.receipt ? (
                <button
                  type='button'
                  name=''
                  id=''
                  class='btn btn-warning my-4'
                  onClick={handleUpdateRecipt}
                >
                  Update Recipt
                </button>
              ) : (
                <button
                  type='button'
                  name=''
                  id=''
                  class='btn btn-primary my-4'
                  onClick={handleAddRecipt}
                >
                  Add New Recipt
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseReport
