document.getElementById('btn-deposit').addEventListener('click', function () {

    // step 2 
    const depositFiled = document.getElementById('deposit-filed');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmout = parseFloat(newDepositAmountString);

    depositFiled.value = '';

    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositAmout;
    depositTotalElement.innerText = newDepositTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalancTotalAmount = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalancTotalAmount + newDepositAmout;
    balanceTotalElement.innerText  = newBalanceTotal;
})