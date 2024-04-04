// Utility function to save state to local storage
export const saveState = (key, state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Error saving state to local storage:", error);
    }
  }
  
  // Utility function to initialize state from local storage
  export const initializeState = (key, initialState) =>  {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        saveState(key, initialState);
        return initialState;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error("Error initializing state from local storage:", error);
      return initialState;
    }
  }
  
  