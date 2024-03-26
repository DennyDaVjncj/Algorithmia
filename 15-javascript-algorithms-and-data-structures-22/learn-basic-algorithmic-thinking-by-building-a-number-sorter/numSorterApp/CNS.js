const sortButton = document.getElementById("sort");//initial DOM target. This target is the primary element for user to see desired request

const sortInputArray = (event) => {
  event.preventDefault();

  const userSlctns = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  // const preparedLogic=botSorting(inputValues);
  
  const sortedSlctns=botSorting(userSlctns)
  updateUI(sortedSlctns);
}

const updateUI = (dataStructure = []) => {
  dataStructure.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  })
}

const botSorting=(ml)=>{
  for(let i=0;i<ml.length-1;i++){
    for(let j=0;j<ml.length;j++){
      console.log(ml,ml[j],ml[j+1])
      if(ml[j]>ml[j+1]){}
    }
  }
}
sortButton.addEventListener('click',sortInputArray);//our web app is now programmed to watch for a click event on a chosen element on our UI

/**
 * Now on step 18
 * analyzing the bot sorting algorithm functionality
 */