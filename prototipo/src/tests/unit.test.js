import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './../components/Header';
import TodoForm from './../components/TodoForm';
import TodoList from './../components/TodoList';
import '@testing-library/jest-dom'
 
test('renders header with correct text', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/Lista de Tareas/i);
  expect(headerElement).toBeInTheDocument();
});
 
test('renders input field with placeholder', () => {
  const { getByPlaceholderText } = render(<TodoForm />);
  const inputElement = getByPlaceholderText('Agregar nueva tarea');
  expect(inputElement).toBeInTheDocument();
});
 
test('renders todos correctly', () => {
  const todos = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  const { getByText } = render(<TodoList todos={todos} />);
  todos.forEach(todo => {
    const todoElement = getByText(todo);
    expect(todoElement).toBeInTheDocument();
  });
});
 
test('adds new todo on form submission', () => {
  const handleAddTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(<TodoForm onAdd={handleAddTodo} />);
  const inputElement = getByPlaceholderText('Agregar nueva tarea');
  fireEvent.change(inputElement, { target: { value: 'Nueva Tarea' } });
  fireEvent.submit(getByText('Agregar'));
  expect(handleAddTodo).toHaveBeenCalledWith('Nueva Tarea');
});
 
test('deletes todo on button click', () => {
  const handleDeleteTodo = jest.fn();
  const todos = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  const { getAllByText } = render(<TodoList todos={todos} onDelete={handleDeleteTodo} />);
  const deleteButtons = getAllByText('Eliminar');
  fireEvent.click(deleteButtons[1]); // Assuming you want to delete the second todo
  expect(handleDeleteTodo).toHaveBeenCalledWith(1);
});
