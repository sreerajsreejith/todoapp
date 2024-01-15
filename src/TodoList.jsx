import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList() {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <div> <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Input your Todos</Form.Label>
      <Form.Control className=''
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      
      <Form.Text className="text-muted">
        We'll never share your todos with anyone else.
      </Form.Text>
    </Form.Group>    
    <Button variant="primary"  onClick={handleAddTodo}>Add Todo</Button>
      <ListGroup>
        {todos.map(todo => (
          <ListGroup.Item key={todo.id}>
            <Form.Check
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.text}
            <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
  </Form>
    
      
    </div>
  );
}

export default TodoList;
