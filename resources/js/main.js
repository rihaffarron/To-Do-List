document.getElementById('todoform').addEventListener('submit',save);

function save(e){
  var todo = document.getElementById('todoInput').value;

  var todoX = {
    todo_list : todo
  }
  if(localStorage.getItem('todos') === null){
    var todos = [];
    todos.push(todoX);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
    else {
      var todos = JSON.parse(localStorage.getItem('todos'));
      todos.push(todoX);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
      document.getElementById('todoform').reset();
      e.preventDefault();
      fetchtodos();
}

function fetchtodos(){
  var todos = JSON.parse(localStorage.getItem('todos'));
  var output = document.getElementById('formOutput');

  output.innerHTML='';

  for(var i=0; i < todos.length; i++){

    var todoshow = todos[i].todo_list;

    output.innerHTML += '  <div class="well">'+ '<h3>' + todoshow + '</h3>' +
                            ' <i class="glyphicon glyphicon-ok" id="ok"></i>'+
                            ' <i class="glyphicon glyphicon-trash" id="del"></i>'+
                             '</div>';
  }

}
