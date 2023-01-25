const simsimi = require('../src/index.js');

(async () => {
  try {
    while (true) {
        const response = await simsimi.simtalk('hi', 'en');
        console.log(response);
    }
    
  }
  catch(e) {
      console.error(e);
    }
})()