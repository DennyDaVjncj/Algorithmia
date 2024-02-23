const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  updateUI(inputValues);
  // bubbleSort()
}

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  })
}

//tentative logic
const bubbleSort=(array)=>{
  for(let i=0;i<arrary.length-1;i++){
    for(let j=0;j<array.length;j++){}
  }
}
sortButton.addEventListener('click',sortInputArray);