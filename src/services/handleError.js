const handleError = (error) => {
    if (!error.response) {
      // Network Error
      console.error('Network error:', error.message);
      return { status: 0, message: 'Network error. Please try again later.' };
    }
  
    const { status, data } = error.response;
  
    switch (status) {
      case 400:
        console.warn('Bad Request:', data.message || 'Invalid input.');
        return { status, message: data.message || 'Invalid input.' };
  
      case 401:
        console.warn('Unauthenticated:', data.message || 'You are not logged in.');
        // Optionally redirect to login page
        window.location.href = '/login';
        return { status, message: data.message || 'Please log in to continue.' };
  
      case 403:
        console.warn('Unauthorized:', data.message || 'Access denied.');
        return { status, message: data.message || 'You do not have permission to perform this action.' };
  
      case 500:
        console.error('Server Error:', data.message || 'Something went wrong on the server.');
        return { status, message: 'An unexpected error occurred. Please try again later.' };
  
      default:
        console.error('Unknown Error:', data.message || 'Something went wrong.');
        return { status, message: 'An unknown error occurred.' };
    }
  };
  

  export default handleError;