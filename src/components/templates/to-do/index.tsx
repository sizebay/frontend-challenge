import { FC, memo, useMemo } from 'react';
import * as S from './index.style';
import { Button, ProgressBar, Text, Textfield } from '../../atoms';
import { monthName, weekDayName } from '../../../constants/date';
import { ToDoListAddInput, ToDoListItem } from '../../organism';
import { ToDoProps } from './index.types';
import { ItemStatus } from '../../../service/to-do.service/models/item';

export const ToDo: FC<ToDoProps> = memo(({ addItem, date, filterOptions, finishItem, items, progress, removeItem, updateDescription, updateFilterDescription, updateFilterStatus }) => {
  const { day, month, year, weekDay } = useMemo(() => {
    const currentDate = new Date(date);
    return {
      day: currentDate.getDate().toString().padStart(2, '0'),
      month: monthName[currentDate.getMonth()],
      year: currentDate.getFullYear(),
      weekDay: weekDayName[currentDate.getDay()],
    }
  }, [date]);

  const handleFilterStatus = (status: ItemStatus) => {
    updateFilterStatus(filterOptions.byStatus === status ? 'ALL' : status);
  }

  const handleClearFilter = () => {
    updateFilterStatus('ALL');
    updateFilterDescription('');
  }

  const renderItems = useMemo(() => {
    const hasFilter = filterOptions.byStatus !== 'ALL' || filterOptions.byDescription !== '';

    if (!hasFilter && items.length === 0) return <S.WarningMessageList>There are no tasks to show. Try adding some</S.WarningMessageList>
    if (hasFilter && items.length === 0) return <S.WarningMessageList>There are no tasks with the chosen filter. <label onClick={handleClearFilter}>Clear the filter here</label> to see all items.</S.WarningMessageList>

    return items.map(item => {
      return <ToDoListItem
        key={item.id}
        item={item}
        finishItem={finishItem}
        removeItem={removeItem}
        updateDescription={updateDescription}
      />
    })
  }, [JSON.stringify(items), filterOptions.byStatus, filterOptions.byDescription]);

  return <S.ToDo>
    <S.ToDoCalendar>
      <S.ToDoCalendarDate>
        <div>
          <Text weight='bold' size={5}>{day}</Text>
        </div>
        <div>
          <Text weight='500' size={2}>{month}</Text>
          <Text weight='300' size={2}>{year}</Text>
        </div>
      </S.ToDoCalendarDate>

      <div>
        <Text size={2}> {weekDay}</Text>
      </div>
    </S.ToDoCalendar>

    <div>
      <ProgressBar
        max={progress.total}
        value={progress.done}
      />
    </div>

    <S.ToDoFilter>
      <div>
        <Button toggled={filterOptions.byStatus === 'DONE'} onClick={() => handleFilterStatus('DONE')} >Done</Button>
        <Button toggled={filterOptions.byStatus === 'PENDING'} onClick={() => handleFilterStatus('PENDING')}>Pending</Button>
      </div>

      <div>
        <Textfield
          placeholder='Search items'
          iconSuffix='search'
          value={filterOptions.byDescription}
          onChange={value => updateFilterDescription(value)}
        />
      </div>
    </S.ToDoFilter>

    <div>
      <ToDoListAddInput addItem={addItem} />
    </div>

    <S.ToDoList>
      {renderItems}
    </S.ToDoList>

  </S.ToDo >;
});
