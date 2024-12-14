import './App.css';

import Homepage from './components/homepage/Homepage';
import Menu from './components/Menu';
import SelectCreative from './components/SelectCreative';
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
import DeliveryOrderView from './components/DeliveryOrderView';
import DeliveryAvailableOrders from './components/DeliveryAvailableOrders';
import DesignerDashboard from './components/DesignerDashboard';
import AddEvents from './components/AddEvents';
import AllEvents from './components/AllEvents';
import ViewEvent from './components/ViewEvent';

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

              {/* delivery */}
              <Route path='/delivery/orders/:orderId' element={<DeliveryOrderView/>} />
              <Route path='/delivery/available-orders' element={<DeliveryAvailableOrders/>} />
              <Route path='/delivery/designer-dashboard' element={<DesignerDashboard/>} />
              <Route path='/delivery/add-events' element={<AddEvents/>} />
              <Route path="/delivery/all-events" element={<AllEvents/>} />
              <Route path="/delivery/view-event/:eventId" element={<ViewEvent/>} />
              
            </Routes>
          </div>
        </div>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
