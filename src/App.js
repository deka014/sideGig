import './App.css';

import Expenses from './components/Expenses';
import Homepage from './components/homepage/Homepage';
import Menu from './components/Menu';
import Employees from './components/Employees';
import Receipt from './components/Receipt';
import ExpenseCreate from './components/ExpenseCreate';
import ReceiptCreate from './components/ReceiptCreate';
import ExpenseReport from './components/ExpenseReport';
import SelectCreative from './components/SelectCreative';
import Drafts from './components/Drafts';
import ExpenseSubmit from './components/ExpenseSubmit';
import EmployeeDashboard from './components/EmployeeDashboard';
import ExpenseReportManager from './components/ExpenseReportManager';
import ManagerDashboard from './components/ManagerDashboard';
import EmployeesOfManager from './components/EmployeesOfManager';
import Login from './components/Login';
import PricingPage from './components/PricingPage';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import ContentSubmission from './components/ContentSubmission';
import DesignArchive from './components/DesignArchive';
import Articles from './components/Articles';
import FAQ from './components/homepage/FAQ';
import SingleBlog from './components/SingleBlog'

import CreativePreview from './components/CreativePreview';
import CreativeSelect from './components/CreativeSelect';
import OrderReceived from './components/OrderReceived';
import OrdersList from './components/OrdersList';
import OrderViewPage from './components/OrderView';
import ScrollToTop from './components/ScrollToTop';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context/UserContext';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ScrollToTop /> {/* Ensure it runs for all route changes */}
        <Menu />
        <ToastContainer />
        <div className="mx-lg-5">
          <div className="container-fluid">
            <Routes>
              {/* General Routes */}
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/articles/:id" element={<Articles />} />
              <Route path="/singleBlog" element={<SingleBlog />} />

              {/* Orders and Designs */}
              <Route path="/order-received" element={<OrderReceived />} />
              <Route path="/orders-list" element={<OrdersList />} />
              <Route path="/order-view" element={<OrderViewPage />} />
              <Route path="/creative-select" element={<CreativeSelect />} />
              <Route path="/select-creative" element={<SelectCreative />} />
              <Route path="/creative-preview" element={<CreativePreview />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/content-submission" element={<ContentSubmission />} />
              <Route path="/design-archive" element={<DesignArchive />} />

              {/* Employee and Manager Dashboards */}
              <Route path="/employee-dashboard/:id" element={<EmployeeDashboard />} />
              <Route path="/manager-dashboard/:mgrId" element={<ManagerDashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employees/:id" element={<Employees />} />
              <Route path="/employees/manager/:mngrId" element={<EmployeesOfManager />} />

              {/* Expenses */}
              <Route path="/expense/:id" element={<Expenses />} />
              <Route path="/expense/:id/category/:category" element={<Expenses />} />
              <Route path="/expense/:id/status/:status" element={<Expenses />} />
              <Route path="/add-expense/:userId" element={<ExpenseCreate />} />
              <Route
                path="/expense-report/user/:userId/:expenseId"
                element={<ExpenseReport />}
              />
              <Route
                path="/expense-report-mgr/user/:userId/:expenseId"
                element={<ExpenseReportManager />}
              />
              <Route path="/receipt/:expenseId" element={<Receipt />} />
              <Route path="/add-receipt/:expenseId" element={<ReceiptCreate />} />
              <Route path="/submit-expense/:expenseId" element={<ExpenseSubmit />} />
              <Route path="/drafts/:userId" element={<Drafts />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
