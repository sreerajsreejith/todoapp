import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, deleteToDo, toggleToDo } from './redux/toDoSlice';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

function ToDoApp() {
 const [toDoInput, setToDoInput] = useState('');
 const dispatch = useDispatch();
 const toDos = useSelector((state) => state.toDos);

 const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(toDoInput));
    setToDoInput('');
 };

 const handleDelete = (id) => {
    dispatch(deleteToDo(id));
 };

 const handleToggle = (id) => {
    dispatch(toggleToDo(id));
 };

 return (
    <Container>
      <h1 className="text-primary">ToDo App</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formToDo">
          <Form.Control
            type="text"
            placeholder="Enter ToDo"
            value={toDoInput}
            onChange={(e) => setToDoInput(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {toDos.map((toDo) => (
          <ListGroup.Item key={toDo.id}>
            <div className="d-flex justify-content-between align-items-center">
              <span
                className={`mr-2 ${toDo.completed ? 'text-muted' : ''}`}
                onClick={() => handleToggle(toDo.id)}
              >
                {toDo.name}
              </span>
              <span>
                <Button
                 variant="secondary"
                 className="mr-2"
                 onClick={() => handleToggle(toDo.id)}
                >
                 {toDo.completed ? 'Uncomplete' : 'Complete'}
                </Button>
                <Button variant="danger" onClick={() => handleDelete(toDo.id)}>
                 Delete
                </Button>
              </span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
 );
}

export default ToDoApp;