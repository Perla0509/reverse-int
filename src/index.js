module.exports = function reverse (n) {
    let reversedNum = 0;
    let rem = n;
    function num_recursed(rem) {
        if (rem < 0) {
            rem = - rem;
            return num_recursed(rem);
        }
        if (rem >= 1) {
            reversedNum = reversedNum * 10 + rem % 10;
            return num_recursed((rem - rem % 10) / 10);
         }
        else return reversedNum;        
        } 

 //delete this to return negative as negative
    return num_recursed(n);

 // a crutch to return reversed negative numbers as negative numbers
 //   if (n >= 0) {return num_recursed(rem);}
 //   else { let num = num_recursed(rem);       
 //          return -num; }
}
