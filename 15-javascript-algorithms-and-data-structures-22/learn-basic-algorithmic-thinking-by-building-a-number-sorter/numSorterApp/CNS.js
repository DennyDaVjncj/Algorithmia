const sortButton = document.getElementById("sort");//initial DOM target. This target is the primary element for user to see desired request

const sortInputArray = (event) => {
  event.preventDefault();

  const userSlctns = [
    ...document.getElementsByClassName("userSlctns")
  ].map(dropdown => Number(dropdown.value));
  
  var sortedVals=botSorting(userSlctns)
  updateUI(sortedVals);
  // console.log(outputValueNode)
  // console.log(outputValueNode.innerText)
}

const updateUI = (slctnsArray = []) => {
  slctnsArray.forEach((num,i) => {
    const slctnOutput = document.getElementById(`output-value-${i}`);
    // console.log(num)
    slctnOutput.innerText = num;
    // console.log(outputValueNode)
  })
}


const botSorting=(userRqsts=[])=>{
  /**
   * Lucius
   * currentUsrSlctn hold temp value
   */
  var currentUsrSlctn;
  for(let i=0;i<userRqsts.length;i++){
    for(let j=1;j<userRqsts.length-1;j++){
      // console.log(userRqsts,userRqsts[j],userRqsts[j])
      if(userRqsts[i]>userRqsts[j]){
        currentUsrSlctn=userRqsts[i];
        userRqsts[i]=userRqsts[j]
        userRqsts[j]=currentUsrSlctn
        // console.log(userRqsts[i],userRqsts[j])
        // var greaterVal=userRqsts[j+1];

        // currentUsrSlctn=greaterVal;
        
      }
    }
  }

  return userRqsts;
}
sortButton.addEventListener('click',sortInputArray);//our web app is now programmed to watch for a click event on a chosen element on our UI

/**
 * step 22
 * now configuring the swap logic
 * as well as the updateUI() logic
 * I'm currently trying to understand how to get the ui to update with current user selections
 * I need go study swapping logic
 */