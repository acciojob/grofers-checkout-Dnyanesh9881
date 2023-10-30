const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table=document.querySelector("table");
	let tr=document.createElement("tr");
    tr.setAttribute(id, "ans");
	table.appendChild(tr);
const getSum = () => {
		let arr=document.querySelectorAll(".price");

	let sum=0;
for(let i=0;i<arr.length;i++){
    let j=Number(arr[i].innerText);
	sum+=j;
}
  tr.innerText=sum;
};

getSumBtn.addEventListener("click", getSum);

