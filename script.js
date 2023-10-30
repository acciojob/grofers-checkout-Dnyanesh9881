const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table=document.getElementsByTagName("table");
	
	let tr=document.createElement("tr");
	// let td1=document.createElement("td");
	// let td2=document.createElement("td");
// td1.innerText="Total price";


// tr.appendChild(td1);
// tr.appendChild(td2);
table.appendChild(tr);
const getSum = () => {
//Add your code here
	let arr=document.querySelectorAll("price");
	let sum=0;
for(let i=0;i<arr.length;i++){
	
}
  td2.innerText=sum;
};

getSumBtn.addEventListener("click", getSum);

