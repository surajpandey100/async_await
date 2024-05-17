function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data from operation 1');
      }, 2000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data from operation 2');
      }, 1500);
    });
  }
  
  async function combineData() {
    try {
      const data1 = await fetchData1();
      const data2 = await fetchData2();
      
      // Combine the results
      const combinedData = {
        result1: data1,
        result2: data2
      };
      
      return combinedData;
    } catch (error) {
      throw new Error('Error combining data: ' + error.message);
    }
  }
  
  // Example usage
  combineData()
    .then((combinedData) => {
      console.log('Combined data:', combinedData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  