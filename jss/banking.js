function input(inputId){
    const depositAmount =document.getElementById(inputId);
    const depositText = depositAmount.value;
    const deposit = parseFloat(depositText);
    depositAmount.value = '';
    return deposit;

}

function getTotal (totalId,currentInput){
    const totalAmount = document.getElementById(totalId);
    const total = parseFloat(totalAmount.innerText);
    totalAmount.innerText = total+currentInput;

}

function getBalance(balanceId,currentInput, isAdd){
    const currentBalance = document.getElementById(balanceId);
    const balance = parseFloat(currentBalance.innerText);
    if(isAdd == true){
        currentBalance.innerText = balance+currentInput;
    }
    else{
        currentBalance.innerText = balance-currentInput;
    }
    
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    const currentDeposit = input('deposit-input');
    if ( currentDeposit>0){
        getTotal('deposit', currentDeposit);
    getBalance('balance-total',currentDeposit, true);
    }

})


document.getElementById('btn-withdraw').addEventListener('click',function(){
    const currentWithdraw = input ('withdraw-input');

    if(currentWithdraw>0){
        getTotal('withdraw',currentWithdraw);
    getBalance('balance-total',currentWithdraw,false);
    }
})