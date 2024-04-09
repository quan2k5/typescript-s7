console.log(checkPrimeNumber([31,3,5,7,11,13]));
function checkPrimeNumber(arr:number[]):boolean{
    function callback(number :number):boolean{
        if(number<2){
            return false;
        }
        for(let i=2;i<=Math.sqrt(number);i++){
            if(number%i==0){
                return false;
            }
        }
        return true;
    }
    let check=arr.every(e=>callback(e))
    return check;
}
