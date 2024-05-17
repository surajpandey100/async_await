function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const success = Math.random() < 0.5;
        if (success) {
          resolve('Data fetched successfully');
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 2000);
    });
  }
  
  async function fetchDataWithTryCatch() {
    try {
      const data = await fetchData();
      console.log('Data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Example usage
  fetchDataWithTryCatch();
  