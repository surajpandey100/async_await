function asyncTask1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Result of asyncTask1');
      }, 2000);
    });
  }
  
  function asyncTask2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Result of asyncTask2');
      }, 1500);
    });
  }
  
  async function executeTasksConcurrently() {
    try {
      const [result1, result2] = await Promise.all([asyncTask1(), asyncTask2()]);
      console.log('Results:', result1, result2);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Example usage
  executeTasksConcurrently();
  