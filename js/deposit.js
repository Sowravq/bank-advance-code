 document.getElementById('doposit-btm').addEventListener('click',function(){
     const newDeposit = getInputElementById('doposit-field');
     const previusDeposit = getTextElementById('deposit-totol');
      const corruntDepositValue = previusDeposit + newDeposit;
      setElementValueById('deposit-totol', corruntDepositValue);
      const totalDeposit = getTextElementById('totol-Blance');
      const correnyTotalDipoist = totalDeposit + newDeposit;
      setElementValueById('totol-Blance',correnyTotalDipoist);
      
 })