/*Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.*/

const myarray= [];
for (let i = 0; i < 10; i++) 
{
    let number = Math.floor(Math.random() * 999);
    myarray[i]=number;
}

  for (let i = 0; i < 10; i++) 
{
    let temp=myarray[i];
    console.log("Number : "+ temp);
}

/*Extend the above program to sort the array and then find the 2nd largest

and the 2nd smallest element. */


function FindLargestAndSmallest(myarray) {
    let firstLargest = 0,
        secondlargest = 0;
    let firstSmallest = 999,
        secondSmallest = 999;

        
    for (let i = 0; i < 10; i++) 
    {
        if (myarray[i] > firstLargest)
        {
            secondlargest = firstLargest;
            firstLargest = myarray[i];
        } else if (
            myarray[i] > secondlargest &&
            myarray[i] != firstLargest
        )
            secondlargest = myarray[i];
    }

    for (let i = 0; i < 10; i++)
    {
        if (myarray[i] < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = myarray[i];
        } else if (
            myarray[i] < secondSmallest &&
            myarray[i] != firstSmallest
        )
            secondSmallest = myarray[i];
    }
    console.log(secondlargest);
    console.log(secondSmallest);

}
FindLargestAndSmallest(myarray);

// 3. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
function Repeated(number)
 {
    if (number % 11 == 0) {
        return true;
    }
    else return false;
}
  //creating array
let array = new Array();
for (let i = 1; i < 100; i++) {
    if (Repeated(i)) array.push(i);
}
//printing the results
  console.log(array);
