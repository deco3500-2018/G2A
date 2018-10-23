// get elements

const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.querySelector('.item-list');

//let itemData = [];

let itemData = JSON.parse(localStorage.getItem('list')) || [];

if(itemData.length > 0){
	itemData.forEach(function(singleItem){
		console.log("YEET");
		itemList.insertAdjacentHTML('beforeend', `
		<div class="item my-3">
			<h5 class="item-name text-capitalize">${singleItem}</h5>
		</div>
	      `
	      );
	});
}

// show feedback function
function showFeedback(text, action){
	feedback.classList.add("showItem", `alert-${action}`);
	feedback.innerHTML = `<p>${text}</p>`

	setTimeout(function() {
		feedback.classList.remove('showItem', `alert-${action}`);
	}, 3000);
}





























