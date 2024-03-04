import { FC } from 'react';
import * as S from './index.style';
import { ToDo } from '../../components/templates/to-do';
import { ToDoServiceProvider, useToDoService } from '../../hooks/todo-service.provider';

const MainPageWrapped: FC = () => {
  const { items, filterOptions, addItem, finishItem, progress, removeItem, updateDescription, updateFilterDescription, updateFilterStatus } = useToDoService();

  return <S.MainPage>
    <S.MainContainer>
      <ToDo
        date={new Date().toDateString()}
        items={items}
        filterOptions={filterOptions}
        addItem={(description) => addItem({ description })}
        updateDescription={(id, description) => updateDescription({ id, newDescription: description })}
        progress={progress}
        removeItem={(id) => removeItem({ id })}
        finishItem={(id) => finishItem({ id })}
        updateFilterStatus={(status) => updateFilterStatus({ status })}
        updateFilterDescription={(description) => updateFilterDescription({ description })}
      />
    </S.MainContainer>
  </S.MainPage>;
};

export const MainPage: FC = () => {
  return <ToDoServiceProvider>
    <MainPageWrapped />
  </ToDoServiceProvider>;
};
