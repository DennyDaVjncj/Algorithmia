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

const botSorting=(userSelects)=>{
  for(let i=0;i<userSelects.length;i++){
    for(let j=0;j<userSelects.length-1;j++){
      console.log(userSelects,userSelects[j],userSelects[j+1])
      if(userSelects[j]>userSelects[j+1]){}
    }
  }
}
sortButton.addEventListener('click',sortInputArray);//our web app is now programmed to watch for a click event on a chosen element on our UI

/**
 * step 18 completed
 * now analyzing the bot sorting algorithm functionality
 */