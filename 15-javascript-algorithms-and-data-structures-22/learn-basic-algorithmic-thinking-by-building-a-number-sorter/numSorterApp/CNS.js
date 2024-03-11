const sortButton = document.getElementById("sort");//initial DOM target. This target is the primary element for user to see desired request

const sortInputArray = (event) => {
  event.preventDefault();

  const uiUX = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  // const preparedLogic=botSorting(inputValues);
  
  const organizedChaos=botSorting(uiUX)
  updateUI(uiUX);
}

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  })
}

const botSorting=(ml)=>{
  for(let i=0;i<ml.length-1;i++){
    for(let j=0;j<ml.length;j++){
      console.log(ml,ml[j],ml[j+1])
    }
  }
}
sortButton.addEventListener('click',sortInputArray);//our web app is now programmed to watch for a click event on a chosen element on our UI

/**
 * Now on step 16
 */