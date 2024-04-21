import * as S from './NoResults.styles'
import { NoResultsProps } from './NoResults.interfaces';

export function NoResults({ removeFilter, resultByStatus }: NoResultsProps) {
  if (resultByStatus === 'done') {
    return (
      <S.Container data-testid='no-results-done'>
        <p> There are no items marked as done. <span onClick={removeFilter}>Clear the filter here</span> to see all items.</p>
      </S.Container>
    )
  }

  if (resultByStatus === 'pending') {
    return (
      <S.Container data-testid='no-results-pending'>
        <p> There are no items marked as pending. <span onClick={removeFilter}>Clear the filter here</span> to see all items.</p>
      </S.Container>
    )
  }

  return (
    <S.Container data-testid='no-results-search'>
      <p> You search found no results. <span onClick={removeFilter}>Clear the search here</span> to see all items.</p>
    </S.Container>
  )


}

