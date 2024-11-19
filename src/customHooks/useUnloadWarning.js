import { useEffect } from 'react';

/**
  Custom hook to handle the "beforeunload" and "unload" events
  * @param {boolean} isDirty - A flag indicating if there are unsaved changes
  * @param {Function} reset - A function to reset the form
*/

const useUnloadWarning = (isDirty, reset) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();  // Prevent the browser from continuing without the user's confirmation.
        event.returnValue = '';  // This displays the browser's default confirmation dialog.
      }
    };

    const handleUnload = () => {
      if (isDirty) {
        reset(); // Clear the form when leaving.
      }
    };

    //These event listeners are added to the window object to monitor the user's actions.
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload); 

    //cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, [isDirty, reset]);
};

export default useUnloadWarning;
