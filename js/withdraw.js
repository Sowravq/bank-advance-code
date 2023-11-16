 document.getElementById('Withdraw-btm').addEventListener('click', function(){
    const newWithdraw = getInputElementById('Withdraw-field');
    const previusWithdraw  = getTextElementById('Withdraw-balance');
    const corruntWithdrawValue = previusWithdraw + newWithdraw;
    setElementValueById('Withdraw-balance',corruntWithdrawValue);
    const totolWithdraw = getTextElementById('totol-Blance');
    const correntTotalWithdraw = totolWithdraw - newWithdraw;
    setElementValueById('totol-Blance', correntTotalWithdraw);
 })