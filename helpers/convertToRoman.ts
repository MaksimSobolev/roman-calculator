function convertToRoman(num: any) {
    let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let RomanArr = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
    let result: string[] = [];
  
    const findElement = (e: number) => {
      return e <= num;
    };
  
    while (num > 0) {
      let nextHighest: number = numberArr.find(findElement) || 1;
  
      result.push(RomanArr[numberArr.indexOf(nextHighest)]);
      num -= nextHighest;
    }
    let newResult = result.join("");
  
    return newResult;
  }
  
  export default convertToRoman;
  