//your JS code here. If required.
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const addBtn = document.getElementById("submit");
const tableBody = document.getElementById("book-list");

addBtn.addEventListener(click,function () {
	const titleValue = titleInput.value.trim();
	const authorValue = authorInput.value.trim();
	const isbnValue = isbnInput.value.trim();
	
	
	const newRow = tableBody.insertRow(-1);
	
	const titleCell = newRow.insertCell(0);
	const authorCell = newRow.insertCell(1);
	const isbnCell = newRow.insertCell(2);
	const dltCell = newRow.insertCell(3);
	
	titleCell.textContent = titleValue;
	authorCell.textContent = authorValue;
	isbnCell.textContent = isbnValue;
	
	const dltBtn = document.createElement("button");
	dltBtn.textContent = "X";
	dltBtn.style.backgroundColor = "red";
	dltBtn.style.color = "white";
	
	dltBtn.addEventListener("click",function () {
		newRow.remove();
	});
	
	dltCell.appendChild(dltBtn);

});












