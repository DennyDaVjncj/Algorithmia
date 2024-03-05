const sortButton = document.getElementById("sort");//initial DOM target. This target is the primary element for user to see desired request

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));
  
  updateUI(inputValues);
  botSorting(array)
}

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
    console.log(i);
  })
}

const botSorting=(array)=>{
  for(let i=0;i<array.length-1;i++){
    for(let j=0;j<array.length;j++){}
  }
}
sortButton.addEventListener('click',sortInputArray);//our web app is now programmed to watch for a click event on a chosen element on our UI

/**
 * Now on step 16
 */