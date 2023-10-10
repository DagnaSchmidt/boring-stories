export const infoMessage = (...params) => {
    if(process.env.NODE_ENV !== 'test') {
      console.log(...params);
    }
  };
  
export const errorMessage = (...params) => {
    if(process.env.NODE_ENV !== 'test') {
      console.error(...params);
    }
  };