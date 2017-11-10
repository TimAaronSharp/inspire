function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()
	var todoElem = document.getElementById('todo-area')
	var todoFieldElem = document.getElementById('todo-field')
	
	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		// debugger
		todoService.getTodos(draw)
	}

	getTodos()

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var todoTemplate = ''
		//DONT FORGET TO LOOP
		for (var i = 0; i < todos.length; i++) {
			var item = todos[i];
			console.log(item.todo)
			todoTemplate += `
			<input<ul style="display: inline-block";>${item.todo}</ul> <button onclick="app.controllers.todoController.removeTodo(${i})">Delete</button>`
		}
		todoFieldElem.innerHTML = todoTemplate
	}
	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		// this.addTodoField()
		var form = e.target
		var todo = {
			todo: form.todoInput.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}
		form.todoInput.value = ''

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		// debugger
		todoService.removeTodo(todoId, getTodos)
		// todoService.getTodos(draw)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

}

