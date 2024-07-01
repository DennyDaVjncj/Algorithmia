const sortButton = document.getElementById("sort");//initial DOM target. This target is the primary element for user to see desired request

const sortInputArray = (event) => {
  event.preventDefault();

  const userSlctns = [
    ...document.getElementsByClassName("userSlctns")
  ].map(dropdown => Number(dropdown.value));
  
  // var sortedVals=botSorting(userSlctns)
  updateUI(userSlctns);
}

const updateUI = (slctnsArray = []) => {
  slctnsArray.forEach((num,i) => {
    const slctnOutput = document.getElementById(`output-value-${i}`);
    slctnOutput.innerText = num;
  })
}


const botSorting=(userRqsts=[])=>{
  /**
   * Lucius
   * currentUsrSlctn hold temp value
   */
  // var currentUsrSlctn; this line is tentative
  for(let i=0;i<userRqsts.length;i++){
    for(let j=1;j<userRqsts.length-1;j++){
      if
        
      }
    }
  }

  // return userRqsts;
}
sortButton.addEventListener('click',sortInputArray);//our web app is now programmed to watch for a click event on a chosen element on our UI

/**
 * step 22
 * now configuring the swap logic
 * as well as the updateUI() logic
 * UpdateUI() functioning properly
 * I need go study swapping logic
 * swapping logic in tentative state
 */