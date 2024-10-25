import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import authHeader from "../services/authHeader";

const ExpenseCreate = () => {

    const { userId } = useParams()

    let expId;

    const [receiptData, setReceiptData] = useState({
        expenseId: '',
        receiptFile: null,
        fileType: 'pdf'
    });


    const [formData, setFormData] = useState({
        userId: userId,
        category: '',
        expenseDate: '',
        description: '',
        amount: ''
    });

    const handleOnChange = (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

        console.log(formData);
    }


    const handleOnFileChange = (event) => {
        event.preventDefault()
        if (event.target.name === 'receiptFile' && event.target.files[0]) {
            setReceiptData({
                ...receiptData,
                [event.target.name]: event.target.files[0]
            });
        }

        //   console.log(formData);
    }

    const handleOnCreate = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:8083/expense', formData, {headers: 
            authHeader()
        })
            .then((response) => {
                console.log("RESPONSE---->", response)
                console.log("EXPENSE ID--->", response.data.id)
                alert("Expense Created Successfully!")
                expId = (response.data.id) // Use the expenseId from the response
                console.log("ExpId --->", expId)
                return response.data.id
 
                // Handle successful response
            }).then((expenseId) => {
                const formData = new FormData();

                formData.append('expenseId', expenseId);
                formData.append('file', receiptData.receiptFile);
                formData.append('fileType', 'pdf')
                // setReceiptData({
                //     ...receiptData,
                //     expenseId: expenseId
                // })
                console.log(receiptData)

                if(receiptData.receiptFile === null){
                    window.location.href = `/expense-report/user/${userId}/${expId}`
                }else
                    return axios.post(`http://localhost:8083/expense/save/${expenseId}`, formData,{headers: 
                    authHeader()
                }); //this will throw error if there is no receipt file

            }).then((response) => {
                console.log("RECEIPT RESPONSE---->", response);
                // alert("Expense Created Successfully!")
                console.log(expId)
                window.location.href = `/expense-report/user/${userId}/${expId}`
                // return response.data.expenseId
                // Handle successful response
                // window.location.href = `/add-receipt/${response.data.id}`;
            })
            // .then((expenseId)=>{
            //     return axios.get(`http://localhost:8083/expense/exp-id/${expenseId}`);
            // })
            .catch((error) => {
                console.log(error)
                // window.location.href = `/hr-reports`
            });

    }

    return (
        <div>
            <div class='lc-block mb-5'>
                <h4>
                    Create a new <span className='mark'>Expense</span>
                </h4>
            </div>
            <div class='text-start d-flex justify-content-center my-5'>
                <div class='w-50'>
                    <form class='d-grid gap-4'>

                        <div class='form-group row'>
                            <label for='category' class='col-sm-3 col-form-label'>
                                Category
                            </label>
                            <div class='col-sm-9'>
                                <select
                                    name='category'
                                    class='form-control'
                                    id='category'
                                    value={formData.category}
                                    onChange={handleOnChange}
                                >
                                    <option value=''>Select a category</option>
                                    <option value='TRAVEL'>TRAVEL</option>
                                    <option value='CHILD_CARE'>CHILD_CARE</option>
                                    <option value='BROADBAND'>BROADBAND</option>
                                    <option value='HRA'>HRA</option>
                                </select>
                            </div>
                        </div>

                        <div class='form-group row'>
                            <label for='expenseDate' class='col-sm-3 col-form-label'>
                                Expense Date
                            </label>
                            <div class='col-sm-9'>
                                <input
                                    type='date'
                                    name='expenseDate'
                                    class='form-control'
                                    id='expenseDate'
                                    placeholder='Expense Date'
                                    value={formData.expenseDate}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <div class='form-group row'>
                            <label for='expenseDescription' class='col-sm-3 col-form-label'>
                                Description
                            </label>
                            <div class='col-sm-9'>
                                <input
                                    type='text'
                                    name='description'
                                    class='form-control'
                                    id='expenseDescription'
                                    placeholder='Expense Description'
                                    value={formData.description}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <div class='form-group row'>
                            <label for='expenseAmount' class='col-sm-3 col-form-label'>
                                Expense Amount
                            </label>
                            <div class='col-sm-9'>
                                <input
                                    type='number'
                                    name='amount'
                                    class='form-control'
                                    id='expenseAmount'
                                    step='any' 
                                    placeholder='Expense Amount'
                                    value={formData.amount}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <div class='form-group row'>
                            <label for='receiptFile' class='col-sm-3 col-form-label'>
                                Receipt File
                            </label>
                            <div class='col-sm-9'>
                                <input
                                    type='file'
                                    name='receiptFile'
                                    class='form-control'
                                    id='receiptFile'
                                    onChange={handleOnFileChange}
                                />
                            </div>
                        </div>


                        <div class='form-group row'>
                            <div class='col-sm-10'>
                                <button
                                    type='submit'
                                    class='btn btn-primary '
                                    onClick={handleOnCreate}
                                >
                                    Create Expense
                                </button>
                            </div>


                        </div>

                        {/* <div class='form-group row'>
                            <div class='col-sm-10'>
                                <button
                                    type='submit'
                                    class='btn btn-primary '
                                    onClick={handleOnSubmit}
                                >
                                    Submit Expense
                                </button>
                            </div>


                        </div> */}

                    </form>
                </div>
            </div>
        </div>
    )

};

export default ExpenseCreate