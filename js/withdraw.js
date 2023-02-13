document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawFiled = document.getElementById('withdraw-filed');
    const withdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    withdrawFiled.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawAmountString);


    const total = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = total;

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const banlanceTotals = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = banlanceTotals;
    
})