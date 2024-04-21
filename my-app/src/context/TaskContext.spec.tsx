import '@testing-library/jest-dom'
import { ITask } from 'types/task.interface';

describe('Test task operations', () => {
  let tasks = [
    { id: '1', title: 'task1', status: 'pending' },
  ];

  const updateLocalStorageMock = jest.fn();

  beforeEach(() => {
    tasks = [
      { id: '1', title: 'task1', status: 'pending' },
    ];
    jest.clearAllMocks();
  });


  it('Should create a new task', () => {
    const newTaskTest = {
      id: '2',
      title: 'newTaskTest',
      status: 'pending',
    }

    function onCreateTask(newTask: ITask) {
      tasks = [...tasks, newTask];
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onCreateTask(newTaskTest);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);
  });

  it('Should edit an existing task', () => {

    const editTaskTest = {
      id: '1',
      title: 'title edited',
      status: 'pending',
    }

    function onEditTask(newContent: string, id: string) {
      tasks = tasks.map(task => task.id === id ? { ...task, title: newContent } : task);
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onEditTask(editTaskTest.title, editTaskTest.id);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);

  });

  it('Should delete an existing task', () => {
    const deleteTaskTest = {
      id: '1',
      title: 'title edited',
      status: 'pending',
    }

    function onDeleteTask(id: string) {
      tasks = tasks.filter(task => task.id !== id);
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onDeleteTask(deleteTaskTest.id);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);

  });

  it('Should confirm a task by changing the status to done', () => {
    const ConfirmTaskTest = {
      id: '1',
      title: 'task1',
      status: 'done',
    }

    function onConfirmTask(id: string) {
      tasks = tasks.map(task => task.id === id ? { ...task, status: "done" } : task);
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onConfirmTask(ConfirmTaskTest.id);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);

  });
});




