(() => {
  let myDinamicVar: any;
  let userID: string | number;
  userID = 1212;
  userID = 'asasa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`string ${myText.toFixed(1)}`);
    }
  }

  greeting('asa');
  greeting(12.121212212);
})();
