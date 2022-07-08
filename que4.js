//que4

4.//Reverse a Number.

var Reverse_Number = (N) => 
{
let rev=0;
  while(N!==0){
    let rem=(N%10);
    rev=rev*10+rem;
    N=Math.floor(N/10);
  }
  return rev;

};
 