import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function EmployeeDashboard() {
  const { id } = useParams()

  const handleAllExpenses = (event) => {
    event.preventDefault()
    window.location.href = `/expense/${id}`
  }

  const handleApprovedExpenses = (event) => {
    event.preventDefault()
    window.location.href = `/expense/${id}/status/approved`
  }

  const handlePendingExpenses = (event) => {
    event.preventDefault()
    window.location.href = `/expense/${id}/status/pending`
  }

  const handleRejectedExpenses = (event) => {
    event.preventDefault()
    window.location.href = `/expense/${id}/status/rejected`
  }

  const handleDraftExpenses = (event) => {
    event.preventDefault()
    window.location.href = `/drafts/${id}`
  }

  //   return (
  //     <div className='container'>
  //       <h2>Employee Dashboard</h2>

  //       <br />

  //       <div className='row mt-3'>
  //         <div className='col'>
  //           <div class='card' style={{ width: '18rem' }}>
  //             <img src='...' class='card-img-top' alt='...' />
  //             <div class='card-body'>
  //               <h5 class='card-title'>All Expenses</h5>
  //               <p class='card-text'>View All Expenses</p>
  //               <a onClick={handleAllExpenses} class='btn btn-primary'>
  //                 Click Here
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div className='col'>
  //           <div class='card' style={{ width: '18rem' }}>
  //             <img src='...' class='card-img-top' alt='...' />
  //             <div class='card-body'>
  //               <h5 class='card-title'>Approved Expenses</h5>
  //               <p class='card-text'>View All Approved Expenses</p>
  //               <a onClick={handleApprovedExpenses} class='btn btn-primary'>
  //                 Click Here
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className='row mt-3'>
  //         <div className='col'>
  //           <div class='card' style={{ width: '18rem' }}>
  //             <img src='...' class='card-img-top' alt='...' />
  //             <div class='card-body'>
  //               <h5 class='card-title'>Pending Expenses</h5>
  //               <p class='card-text'>View All Pending Expenses</p>
  //               <a onClick={handlePendingExpenses} class='btn btn-primary'>
  //                 Click Here
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div className='col'>
  //           <div class='card' style={{ width: '18rem' }}>
  //             <img src='...' class='card-img-top' alt='...' />
  //             <div class='card-body'>
  //               <h5 class='card-title'>Rejected Expenses</h5>
  //               <p class='card-text'>View All Rejected Expenses</p>
  //               <a onClick={handleRejectedExpenses} class='btn btn-primary'>
  //                 Click Here
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className='row mt-3'>
  //         <div className='col'>
  //           <div class='card' style={{ width: '18rem' }}>
  //             <img src='...' class='card-img-top' alt='...' />
  //             <div class='card-body'>
  //               <h5 class='card-title'>Draft Expenses</h5>
  //               <p class='card-text'>View All Draft Expenses</p>
  //               <a onClick={handleDraftExpenses} class='btn btn-primary'>
  //                 Click Here
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )

  return (
    <div className='container mb-5'>
      <div>
        <h2 className='text-center mb-3'>Employee Dashboard</h2>{' '}
        <a name='' id='' className='btn btn-warning' href={`/add-expense/`+id} role='button'>
          Create New Expense
        </a>
      </div>

      <div className='row mt-3'>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>All Expenses</h5>
              <p className='card-text'>View All Expenses</p>
              <button onClick={handleAllExpenses} className='btn btn-primary'>
                Click Here
              </button>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Approved Expenses</h5>
              <p className='card-text'>View All Approved Expenses</p>
              <button
                onClick={handleApprovedExpenses}
                className='btn btn-primary'
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Pending Expenses</h5>
              <p className='card-text'>View All Pending Expenses</p>
              <button
                onClick={handlePendingExpenses}
                className='btn btn-primary'
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Rejected Expenses</h5>
              <p className='card-text'>View All Rejected Expenses</p>
              <button
                onClick={handleRejectedExpenses}
                className='btn btn-primary'
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Draft Expenses</h5>
              <p className='card-text'>View All Draft Expenses</p>
              <button onClick={handleDraftExpenses} className='btn btn-primary'>
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
