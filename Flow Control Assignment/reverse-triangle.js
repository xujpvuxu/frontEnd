function reverseTriangle(max){
    for (let i = 1; i <= max; i++) {
        let space = " ";
        let start = "*";
        console.log(`${space.repeat(i)}${start.repeat(max-i)}`);
      }
}