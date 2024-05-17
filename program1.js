// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Data fetched successfully');
//       }, 2000);
//     });
//   }
  
//   function processData(data) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Data processed: ' + data);
//       }, 1500);
//     });
//   }
  
//   function displayResult(result) {
//     console.log('Result:', result);
//   }
  
//   async function fetchDataAndProcess() {
//     try {
//       const data = await fetchData();
//       const processedData = await processData(data);
//       displayResult(processedData);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   fetchDataAndProcess();
  
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched successfully');
      }, 2000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data processed: ' + data);
      }, 1500);
    });
  }
  
  function displayResult(result) {
    console.log('Result:', result);
  }
  
  async function fetchDataAndProcess() {
    try {
      const data = await fetchData();
      const processedData = await processData(data);
      displayResult(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchDataAndProcess();
  