(() => {
  //let myNumber: number;
  //let myString: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'mikaela';

  function hiV1(name: string | null) {
    let hello = 'Hola';
    if (name) {
      hello += 'name';
    } else {
      hello += 'nobody';
    }
  }

  function hiV2(name: string | null) {
    let hello = 'Hola';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV1('Nicolas');
  hiV1(null);
  hiV2('Nicolas');
  hiV2(null);
})();
