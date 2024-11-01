import './App.css'

import Expenses from './components/Expenses'
import Homepage from './components/homepage/Homepage'
import Menu from './components/Menu'
import Employees from './components/Employees'
import Receipt from './components/Receipt'
import ExpenseCreate from './components/ExpenseCreate'
import ReceiptCreate from './components/ReceiptCreate'
import ExpenseReport from './components/ExpenseReport'
import Drafts from './components/Drafts'

import { Route, Routes } from 'react-router-dom'
import ExpenseSubmit from './components/ExpenseSubmit'
import EmployeeDashboard from './components/EmployeeDashboard'
import ExpenseReportManager from './components/ExpenseReportManager'
import ManagerDashboard from './components/ManagerDashboard'
import EmployeesOfManager from './components/EmployeesOfManager'
import Login from './components/Login'

import { ToastContainer } from 'react-toastify'
import BackButton from './components/BackButton'
import Footer from './components/footer/Footer'
import PricingPage from './components/PricingPage'
import Payment from './components/Payment'
import Confirmation from './components/Confirmation'
import ContentSubmission from './components/ContentSubmission'
import { UserProvider } from './context/UserContext'
import DesignArchive from './components/DesignArchive'
import Articles from './components/Articles'

function App() {
  return (
    <div className='App'>
      <UserProvider>
      <Menu />
      <ToastContainer />
      {/* <BackButton /> */}
      <div class='mx-lg-5'>
        {/* <div class='container-fluid row'> */}
        <div class='container-fluid'>
          <div class='col-12'>
            <Routes>
              <Route path='/' element={<Homepage />}></Route>
            </Routes>
          </div>
          <div class='col-12'>
            <Routes>
              <Route path='/pricing' element={<PricingPage/>}></Route>
            </Routes>
          </div>
          <div class='col-12'>
            <Routes>
              <Route path='/payment' element={<Payment/>}></Route>
            </Routes>
          </div>
          <div class='col-12'>
            <Routes>
            <Route path="/articles/:id" element={<Articles />} />
            </Routes>
          </div>
          <div class='col-12'>
            <Routes>
              <Route path='/confirmation' element={<Confirmation/>}></Route>
            </Routes>
          </div>
          <div class='col-12'>
            <Routes>
              <Route path='/content-submission' element={<ContentSubmission/>}></Route>
            </Routes>
          </div>
          <div class='col-12'>
            <Routes>
              <Route path='/design-archive' element={<DesignArchive />}></Route>
            </Routes>
          </div>
          <div class='col-12'>
            <Routes>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </div>
          {/* <div class='col-12'>
            <Routes>
              <Route path='/signup' element={<Signup />}></Route>
            </Routes>
          </div> */}

          <div class='col-12'>
            <Routes>
              <Route
                path='/employee-dashboard/:id'
                element={<EmployeeDashboard />}
              ></Route>
            </Routes>
          </div>
          <div class='col-12'>
            <Routes>
              <Route
                path='/add-expense/:userId'
                element={<ExpenseCreate />}
              ></Route>
            </Routes>
          </div>

          <div class='col-12'>
            <Routes>
              <Route path='/employees' element={<Employees />}></Route>
            </Routes>
          </div>

          <div class='col-12'>
            <Routes>
              <Route path='/expense/:id' element={<Expenses />}></Route>
            </Routes>
          </div>

          <div class='col-12'>
            <Routes>
              <Route
                path='/expense/:id/category/:category'
                element={<Expenses />}
              ></Route>
            </Routes>
          </div>

          <div class='col-12'>
            <Routes>
              <Route
                path='/expense/:id/status/:status'
                element={<Expenses />}
              ></Route>
            </Routes>
          </div>

          <div class='col-12'>
            <Routes>
              <Route
                path='/expense-report/user/:userId/:expenseId'
                element={<ExpenseReport />}
              ></Route>
            </Routes>
          </div>
          <div class='col-12'>
            <Routes>
              <Route path='/employees/:id' element={<Employees />}></Route>
            </Routes>
          </div>

          <div class='col-12'>
            <Routes>
              <Route
                path='/employees/manager/:mngrId'
                element={<EmployeesOfManager />}
              ></Route>
            </Routes>
          </div>

          <div class='col-12'>
            <Routes>
              <Route path='/receipt/:expenseId' element={<Receipt />}></Route>
            </Routes>
          </div>

          <div class='col-12'>
            <Routes>
              <Route
                path='/manager-dashboard/:mgrId'
                element={<ManagerDashboard />}
              ></Route>
            </Routes>
          </div>

          <div class='col-12'>
            <Routes>
              <Route
                path='/expense-report-mgr/user/:userId/:expenseId'
                element={<ExpenseReportManager />}
              ></Route>
            </Routes>
          </div>

          {/* <div class='col-12'>
            <Routes>
              <Route
                path='/add-receipt/:expenseId'
                element={<ReceiptCreate />}
              ></Route>
            </Routes>
          </div> */}

          {/* <div class='col-12'>
            <Routes>
              <Route
                path='/submit-expense/:expenseId'
                element={<ExpenseSubmit />}
              ></Route>
            </Routes>
          </div> */}

          {/* <div class='col-12'>
            <Routes>
              <Route path='/drafts/:userId' element={<Drafts />}></Route>
            </Routes>
          </div> */}
        </div>
      </div>
      <Footer/>
      </UserProvider>
    </div>
  )
}

export default App
