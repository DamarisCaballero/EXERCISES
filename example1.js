/**  Write a program in `fizzbuzz.js` that prints an array of integers from 1 to 100.
- For multiples of 3, show `"Fizz"` instead of the number.
- For multiples of 5, show `"Buzz"` instead of the number.
- For multiples of 3 and 5, show `"FizzBuzz"` instead of the number.
- Return an array containing the results based on the rules above.

This function returns an array of integers from 1 to 100, where multiples of 3 are replaced with the string “Fizz”, multiples of 5 are replaced with the string “Buzz”, and multiples of both 3 and 5 are replaced with the string “FizzBuzz”.

Note: first try to solve the exercise by yourself and after that you should check this answer.
*/

    function fizz(){
        const results =[];

        for (let i = 1; i <= 100; i++){
            if (i % 3 === 0 && i % 5 === 0 ) {
                results.push('FizzBuzz');
        } else if (i % 3 === 0){
                results.push('Fizz');
        } else if (i % 5 === 0){
                results.push('Buzz');
        }else {
                results.push(i);
        }
    }
        return results;
    }

    console.log(fizz());

