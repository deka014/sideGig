import axios from 'axios';
import authHeader from '../authHeader';

export const checkPaymentStatus = async () => {
  
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/check-payment-status`, {
      headers: {
        ...authHeader()
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error checking payment status:', error);
    throw error.response?.data || { success: false, message: 'Failed to check payment status' };
  }
};

