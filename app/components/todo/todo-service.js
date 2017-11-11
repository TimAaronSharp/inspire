function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/TimSharp'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				todoList = res
				console.log(todoList)
				console.log('Todo Data ', res)
				draw(res)
			})
			.fail(logError)
	}

	this.addTodo = function (todo, getTodosCb) {
		// WHAT IS THIS FOR???
		todoList.push(todo)
		$.post(baseUrl, todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				getTodosCb(res)
			})
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId, getTodosCb) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			// data: JSON.stringify(todoId)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				debugger
				todoList[todoId].completed = !todoList[todoId].completed
				getTodosCb(todoList)
				
			})
			.fail(logError)
	}

	this.removeTodo = function (todoId, getTodosCb) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		$.ajax({
			method: 'DELETE',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				getTodosCb(res)
			})
			.fail(logError)

	}

}
