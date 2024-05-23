const sortButton = document.getElementById("sort");//initial DOM target. This target is the primary element for user to see desired request

const sortInputArray = (event) => {
  event.preventDefault();

  const userSlctns = [
    ...document.getElementsByClassName("values-dropdown")
  ].map(dropdown => Number(dropdown.value));

  // const preparedLogic=botSorting(inputValues);
  
  var sortedVals=botSorting(userSlctns)
  updateUI(sortedVals);
}

const updateUI = (slctnsArray = []) => {
  slctnsArray.forEach((i, num) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  })
}

const botSorting=(userRqsts=[])=>{
  for(let i=0;i<userRqsts.length;i++){
    for(let j=0;j<userRqsts.length-1;j++){
      console.log(userRqsts,userRqsts[j],userRqsts[j+1])
      // if(userRqsts[j]>userRqsts[j+1]){
      //   var currentUsrSlctn=userRqsts[j];
      //   var greaterVal=userRqsts[j+1];

      //   currentUsrSlctn=greaterVal;
        
      // }
    }
  }
}
sortButton.addEventListener('click',sortInputArray);//our web app is now programmed to watch for a click event on a chosen element on our UI

/**
 * step 19
 * now configuring the swap logic
 * sortInput Array updated with corrected argument for hoisted functions
 */