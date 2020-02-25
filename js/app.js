
let n = parseInt(prompt("Enter number"));
let check=true;
checkPrimeNumbers(n);
function checkPrimeNumbers(n) {
    if (n < 2){
        check =false;
    }
    else if (n == 2){
        check = true;
    }
    else if (n % 2 == 0){
        check = false;
    }
    else {
        for (let i = 3; i < Math.sqrt(n); i+=1)
        {
            if (n % i == 0){
                check=false;
                break;
            }
        }
    }
    alert(check);
    return check
}

let num = Number(prompt('Nhập vào số lượng số nguyên tố in ra'));
let dem;
let count = 0;
for (let n = 2; count < num; n++) {
    dem = 0;
    for (let i = 2; i < n; i++) {
        if (n % i ==0) {
            dem ++;
        }
    }
    if (dem==0) {
        document.write(n + '<br/>');
        count++;
    }
}
