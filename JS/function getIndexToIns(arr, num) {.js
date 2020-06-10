function destroyer(arr, ...a) {
    let resArr = [...arr]

    a.forEach(x => {
      resArr = resArr.filter(item => item !== x)
    });
  console.log(resArr);
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);