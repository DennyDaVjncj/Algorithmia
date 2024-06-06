const sortButton = document.getElementById("sort");//initial DOM target. This target is the primary element for user to see desired request

const sortInputArray = (event) => {
  event.preventDefault();

  const userSlctns = [
    ...document.getElementsByClassName("userSlctns")
  ].map(dropdown => Number(dropdown.value));
  console.log(userSlctns)

  // const preparedLogic=botSorting(inputValues);
  
  var sortedVals=botSorting(userSlctns)
  updateUI(sortedVals);
}

const updateUI = (slctnsArray = []) => {
  slctnsArray.forEach((num,i) => {
    const outputValueNode = document.getElementById(`output-value-${num}`);
    console.log(i)
    outputValueNode.innerText = slctnsArray[num];
  })
}


const botSorting=(userRqsts=[])=>{
  /**
   * Lucius
   * currentUsrSlctn hold temp value
   */
  var currentUsrSlctn=0;
  for(let i=0;i<userRqsts.length;i++){
    for(let j=1;j<userRqsts.length-1;j++){
      console.log(userRqsts,userRqsts[j],userRqsts[j])
      if(userRqsts[i]>userRqsts[j]){
        currentUsrSlctn=userRqsts[i];
        userRqsts[i]=userRqsts[j]
        userRqsts[j]=currentUsrSlctn
        console.log(userRqsts[i],userRqsts[j])
        // var greaterVal=userRqsts[j+1];

        // currentUsrSlctn=greaterVal;
        
      }
    }
  }

  return userRqsts;
}
sortButton.addEventListener('click',sortInputArray);//our web app is now programmed to watch for a click event on a chosen element on our UI

/**
 * step 19
 * now configuring the swap logic
 * sortInput Array updated with corrected argument for hoisted functions
 */