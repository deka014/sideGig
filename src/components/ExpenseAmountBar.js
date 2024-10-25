import React from 'react'
import { Bar } from 'react-chartjs-2'

function ExpenseAmountBar({ approvedAmount, pendingAmount }) {
    // console.log(approvedAmount,pendingAmount)
  const data = {
    labels: ['Pending Amount', 'Approved Amount'],
    datasets: [
      {
        label: 'Expense Amount',
        data: [approvedAmount, pendingAmount], // Replace these numbers with your actual amounts
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      
    },
    plugins: {
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            fontColor: "blue",
            boxWidth: 10,
            padding: 20,
          },
        },
      },
  }
  return <Bar data={data} options={options} />
}

export default ExpenseAmountBar
