// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import Loading from './Loading'
// import authHeader from '../services/authHeader'

// const ExpenseReportManager = () => {
//   const [expenseData, setExpenseData] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [receiptFileType, setReceiptFileType] = useState('')
//   const [updatedComment, setUpdatedComment] = useState('')

//   const { expenseId, userId } = useParams()

//   const handleAddComment = (event) => {
//     event.preventDefault()

//     console.log('UPDATED COMMENT----> ', updatedComment)

//     axios
//       .put(
//         `http://localhost:8083/expense/add-comment/${expenseId}?mgrComment=${updatedComment}`,
//         {},
//         {
//           headers: authHeader(),
//         }
//       )
//       .then((response) => {
//         console.log('Success:', response.data)
//       })
//       .catch((error) => {
//         console.error('Error:', error)
//         // Handle error
//       })
//   }

//   const [receiptData, setReceiptData] = useState({
//     receiptFile: null,
//   })

//   const onChangeHandler = (event) => {
//     event.preventDefault()
//     const { value } = event.target
//     setUpdatedComment(value)
//   }

//   const handleOnFileChange = (event) => {
//     event.preventDefault()

//     if (event.target.name === 'receiptFile' && event.target.files[0]) {
//       setReceiptData({
//         [event.target.name]: event.target.files[0],
//       })
//     }
//   }

//   const handleApproval = (event) => {
//     event.preventDefault()

//     axios
//       .put('http://localhost:8083/expense/updateStatus', expenseData, {
//         params: {
//           status: 'APPROVED', // Set the status to APPROVED
//         },
//         headers: authHeader(),
//       })
//       .then((response) => {
//         console.log('Expense Approved successfully:', response.data)
//         window.location.reload()
//         // Handle successful response
//       })
//       .catch((error) => {
//         console.error('Error updating expense:', error)
//         // Handle error
//       })
//   }

//   const handleRejection = (event) => {
//     event.preventDefault()

//     axios
//       .put('http://localhost:8083/expense/updateStatus', expenseData, {
//         params: {
//           status: 'REJECTED', // Set the status to APPROVED
//         },
//         headers: authHeader(),
//       })
//       .then((response) => {
//         console.log('Expense rejected successfully:', response.data)
//         window.location.reload()
//       })
//       .catch((error) => {
//         console.error('Error updating expense:', error)
//         // Handle error
//       })
//   }

//   useEffect(() => {
//     async function fetchExpense(expenseId) {
//       try {
//         const response = await axios.get(
//           `http://localhost:8083/expense/exp-id/${expenseId}`,
//           { headers: authHeader() }
//         )
//         setExpenseData(response.data)
//         console.log('EXPENSE ---> ', response.data)
//       } catch (error) {
//         if (error.response && error.response.status === 403) {
//           // Handle 403 Unauthorized error
//           window.location.href = '/'
//         }
//         // You can display a message to the user or redirect them to the login page
//         else if (error.response && error.response.status === 401) {
//           // alert('Not Authenticated ')
//           // window.location.href = '/login'
//         } else {
//           console.error('Error fetching expense data:', error)
//         }
//       } finally {
//         setIsLoading(false) // End loading
//       }
//     }

//     fetchExpense(expenseId)
//   }, [])

//   if (isLoading) {
//     return (
//       <div className='container '>
//         <Loading />
//       </div>
//     )
//   }

//   return (
//     //use bootstrap to create a card with the above details
//     <div>
//       <div class='row g-2 overflow-hidden'>
//         <div class='col-md-6'>
//           <div class='lc-block my-5'>
//             <h4>
//               {/* Employee Details for <span className='mark'>{employee.name}</span> */}{' '}
//               Expense Details
//             </h4>
//           </div>
//           <div class='lc-block1'>
//             <table class='table table-striped' align='center'>
//               <tbody>
//                 <tr>
//                   <th>Expense ID</th>
//                   <td>{expenseData.id}</td>
//                 </tr>
//                 <tr>
//                   <th>Expense Category</th>
//                   <td>{expenseData.category}</td>
//                 </tr>
//                 <tr>
//                   <th>Expense Date</th>
//                   <td>{expenseData.expenseDate}</td>
//                 </tr>
//                 <tr>
//                   <th>Expense Status</th>
//                   <td>{expenseData.status}</td>
//                 </tr>
//                 <tr>
//                   <th>Submit Status</th>
//                   <td>
//                     {expenseData.submitStatus === 'TRUE'
//                       ? 'SUBMITTED'
//                       : 'NOT SUBMITTED'}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Expense Amount</th>
//                   <td>{expenseData.amount}</td>
//                 </tr>
//                 <tr>
//                   <th>Expense Description</th>
//                   <td>{expenseData.description}</td>
//                 </tr>

//                 <tr>
//                   <th>Manager Comment</th>
//                   <td>
//                     {expenseData.mgrComment == ''
//                       ? 'No comments'
//                       : expenseData.mgrComment}
//                   </td>
//                 </tr>

//                 <tr>
//                   <th>Approve</th>
//                   <td>
//                     <input
//                       name=''
//                       id=''
//                       class='btn btn-success'
//                       type='button'
//                       value='Click Here'
//                       onClick={handleApproval}
//                     />
//                   </td>
//                 </tr>

//                 <tr>
//                   <th>Reject</th>
//                   <td>
//                     <input
//                       name=''
//                       id=''
//                       class='btn btn-danger'
//                       type='button'
//                       value='Click Here'
//                       onClick={handleRejection}
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div>
//             <form onSubmit={handleAddComment}>
//               <div className='col-md-6'>
//                 <input
//                   type='text'
//                   className='form-control mb-3'
//                   id='mgrComment'
//                   onChange={onChangeHandler}
//                   placeholder='Enter your comment here'
//                 />
//                 <button type='submit' className='btn btn-success mb-3'>
//                   Add Comment
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div class='col-md-6'>
//           <div class='lc-block my-5'>
//             <h4>
//               {/* Employee Details for <span className='mark'>{employee.name}</span> */}{' '}
//               Attachments
//             </h4>
//           </div>
//           <div class='accordion' id='accordionExample'>
//             <div class='accordion-item'>
//               <h2 class='accordion-header' id='headingOne'>
//                 <button
//                   class='accordion-button'
//                   type='button'
//                   data-bs-toggle='collapse'
//                   data-bs-target='#collapseOne'
//                   aria-expanded='true'
//                   aria-controls='collapseOne'
//                 >
//                   Recipts Attached
//                 </button>
//               </h2>
//               <div
//                 id='collapseOne'
//                 class='accordion-collapse collapse show'
//                 aria-labelledby='headingOne'
//                 data-bs-parent='#accordionExample'
//               >
//               </div>
//             </div>
//           </div>
//           <div class='lc-block1 h-75'>
//             {expenseData.receipt ? (
//               expenseData.receipt.fileType === 'pdf' ? (
//                 <iframe
//                   src={`data:application/pdf;base64,${expenseData.receipt.receiptFile}`}
//                   width='100%'
//                   height='100%'
//                   frameBorder='0'
//                 ></iframe>
//               ) : (
//                 <img
//                   src={`data:application/jpeg;base64,${expenseData.receipt.receiptFile}`} // Ensure this is a valid URL or base64 string
//                   width='100%'
//                   height='100%'
//                   alt='Receipt' // Add alt text for accessibility
//                 />
//               )
//             ) : (
//               // <strong className='text-center'>File Not Found</strong>
//               <p class='lead my-5'>No Attachments Found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ExpenseReportManager

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import authHeader from '../services/authHeader'

const ExpenseReportManager = () => {
  const [expenseData, setExpenseData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [receiptFileType, setReceiptFileType] = useState('')
  const [updatedComment, setUpdatedComment] = useState('')

  const { expenseId, userId } = useParams()

  const handleAddComment = (event) => {
    event.preventDefault()

    console.log('UPDATED COMMENT----> ', updatedComment)

    axios
      .put(
        `http://localhost:8083/expense/add-comment/${expenseId}?mgrComment=${updatedComment}`,
        {},
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        console.log('Success:', response.data)
      })
      .catch((error) => {
        console.error('Error:', error)
        // Handle error
      })
  }

  const [receiptData, setReceiptData] = useState({
    receiptFile: null,
  })

  const onChangeHandler = (event) => {
    event.preventDefault()
    const { value } = event.target
    setUpdatedComment(value)
  }

  const handleOnFileChange = (event) => {
    event.preventDefault()

    if (event.target.name === 'receiptFile' && event.target.files[0]) {
      setReceiptData({
        [event.target.name]: event.target.files[0],
      })
    }
  }

  const handleApproval = (event) => {
    event.preventDefault()

    axios
      .put('http://localhost:8083/expense/updateStatus', expenseData, {
        params: {
          status: 'APPROVED', // Set the status to APPROVED
        },
        headers: authHeader(),
      })
      .then((response) => {
        console.log('Expense Approved successfully:', response.data)
        window.location.reload()
        // Handle successful response
      })
      .catch((error) => {
        console.error('Error updating expense:', error)
        // Handle error
      })
  }

  const handleRejection = (event) => {
    event.preventDefault()

    axios
      .put('http://localhost:8083/expense/updateStatus', expenseData, {
        params: {
          status: 'REJECTED', // Set the status to APPROVED
        },
        headers: authHeader(),
      })
      .then((response) => {
        console.log('Expense rejected successfully:', response.data)
        window.location.reload()
      })
      .catch((error) => {
        console.error('Error updating expense:', error)
        // Handle error
      })
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

  return (
    <div className='container my-4'>
      <div class='lc-block my-5'>
        <h4>
          Expense Report for Employee ID <span className='mark'>{userId}</span>
        </h4>
      </div>
      <div className='row g-4'>
        <div className='col-md-6'>
          <div className='card'>
            {/* Details section */}
            <div className='card-body'>
              {/* <h4 className='card-title'>Expense Details</h4> */}
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
                        {expenseData.mgrComment == null
                          ? 'No comments'
                          : expenseData.mgrComment}
                      </td>
                    </tr>

                    <tr>
                      <th>Approve</th>
                      <td>
                        <input
                          name=''
                          id=''
                          class='btn btn-success'
                          type='button'
                          value='Click Here'
                          onClick={handleApproval}
                        />
                      </td>
                    </tr>

                    <tr>
                      <th>Reject</th>
                      <td>
                        <input
                          name=''
                          id=''
                          class='btn btn-danger'
                          type='button'
                          value='Click Here'
                          onClick={handleRejection}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <form
              className='mt-3 d-flex flex-grow-1 align-items-center'
              onSubmit={handleAddComment}
            >
              <div className=' flex-grow-1 me-2'>
                <input
                  type='text'
                  className='form-control'
                  id='mgrComment'
                  onChange={onChangeHandler}
                  placeholder='Enter your comment here'
                />
              </div>
              <button type='submit' className='btn btn-success'>
                Add Comment
              </button>
            </form>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='card'>
            {/* Attachments section */}
            <div className='card-body'>
              <h4 className='card-title'>Attachments</h4>
              <div className='accordion' id='accordionExample'>
                {/* ... (existing attachments code) */}
              </div>
            </div>
          </div>
          <div className='card mt-3 h-75 '>
            {/* Receipts section */}
            <div className='card-body h-100'>
              {expenseData.receipt ? (
                expenseData.receipt.fileType === 'pdf' ? (
                  <iframe
                    src={`data:application/pdf;base64,${expenseData.receipt.receiptFile}`}
                    width='100%'
                    height='100%'
                    frameBorder='0'
                    title='Receipt PDF'
                  ></iframe>
                ) : (
                  <img
                    src={`data:image/jpeg;base64,${expenseData.receipt.receiptFile}`}
                    width='100%'
                    height='100%'
                    alt='Receipt'
                  />
                )
              ) : (
                <p className='lead my-5'>No Attachments Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseReportManager
