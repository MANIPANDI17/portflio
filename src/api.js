export async function fetchBio(person) {
    const delay = person === 'Bob'? 3000 : 200;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('This is ' + person + '’s bio.');
      }, delay);
    })
  }
  