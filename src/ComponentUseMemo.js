// import { useState, useMemo } from "react";

// const ComponentUseMemo = () => {
//    const [number, SetNumber] = useState(1);
//    const memoizedFactorial = useMemo(() => FactorialCalc(number), [number]);
   
//    const onChange = (e) => {
//        console.log(e.target.value);
//        SetNumber(Number(e.target.value));
// };
// return (
//   <div><input type="text" onChange={onChange} />
//        {memoizedFactorial}
//   </div>
// );
// };
// function FactorialCalc(n) {
//     console.log('factorialOf(n) called!');
//     return n <= 0 ? 1 : n * FactorialCalc(n - 1);
//  }
// export default ComponentUseMemo;