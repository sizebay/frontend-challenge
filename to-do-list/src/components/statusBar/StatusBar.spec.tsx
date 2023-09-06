// import { render, screen } from "@testing-library/react";
// import StatusBar from "../statusBar/index";
// import { TaskContextProvider } from "../../services/taskServices/TaskContext";
// import * as UseTaskContextModule from '../../services/taskServices/UseTaskContext';

// const mockTaskData = [
//     { id: 1, isDone: true, text: 'Task 1' },
//     { id: 2, isDone: true, text: 'Task 2' },
//     { id: 3, isDone: false, text: 'Task 3' },
// ];

// PROBLEMAS COM O FRAME DO LOTTIE NOS TESTES
// describe('statusBar', ()=> {

//     it('should set the width of "statusBar-content" span to the percentage of completed tasks', () => {
//         const setTaskDataMock = jest.fn(); 
//         const spy = jest.spyOn(UseTaskContextModule, 'useTaskContext');
//         spy.mockReturnValue({ taskData: mockTaskData, setTaskData: setTaskDataMock }); 
  
//         render(
//             <TaskContextProvider>
//                 <StatusBar />
//             </TaskContextProvider>
//         );
//         const statusBarContent = screen.getByTestId('statusBar-content');
//         expect(statusBarContent).toHaveStyle('width: 66.66666666666666%');

//         spy.mockRestore();
//     });
// })
