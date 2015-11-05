var toDoArray = ['Get groceries', 'Enjoy weather', 'Clean-up'];

function populateToDoList () {
	var toDoList = document.getElementById('toDoList');

	while (toDoList.firstChild) {
		toDoList.removeChild(toDoList.firstChild);
	}

	for (var i = 0; i < toDoArray.length; i++) {
		var listItem = document.createElement('li');
		listItem.innerHTML = toDoArray[i];
		listItem.appendChild(createRemoveButton());
		toDoList.appendChild(listItem);
	}
}

function createRemoveButton () {
	var removeButton = document.createElement('button');
	removeButton.onclick = function(){
		removeItem(this);
	};
	removeButton.innerHTML = 'Remove';
	return removeButton;
}

function addToDo (todo) {
	var string = todo.value;
	toDoArray.push(string);
	populateToDoList();
	todo.value = null;
}

function removeItem (item) {
	var toDoItem = item.parentNode.firstChild.textContent;
	var itemIndex = toDoArray.indexOf(toDoItem);
	toDoArray.splice(itemIndex, 1);
	populateToDoList();
}

populateToDoList();
