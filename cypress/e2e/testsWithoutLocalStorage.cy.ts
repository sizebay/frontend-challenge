import { format } from 'date-fns';

const today = new Date();
const formattedDate = format(today, 'dd MMM yyyy EEEE');
const [day, month, year, dayOfWeek] = formattedDate.split(' ');

describe('Tests on app open', () => {

  it('check today dates', () => {
    cy.visit("http://localhost:3024")

    cy.get('[data-cy="day"]').should('contain', day)
    cy.get('[data-cy="month"]').should('contain', month)
    cy.get('[data-cy="year"]').should('contain', year)
    cy.get('[data-cy="dayOfWeek"]').should('contain', dayOfWeek)
  })

  it('check filters empty', () => {
    cy.visit("http://localhost:3024")

    cy.get('[data-cy="buttonContainer"] > :nth-child(1)').find('svg').should('not.exist');
    cy.get('[data-cy="buttonContainer"] > :nth-child(2)').find('svg').should('not.exist');

    cy.get('[data-cy="searchTaskInput"]').should('be.empty')
    cy.get('[data-cy="newItemInput"]').should('be.empty')
    cy.get('[data-cy="newItemInput"]').should('not.be.disabled')
  })

  it('check filters change', () => {
    cy.visit("http://localhost:3024")

    cy.get('[data-cy="buttonContainer"] > :nth-child(1)').click();
    cy.get('[data-cy="buttonContainer"] > :nth-child(1)').find('svg').should('exist');
    cy.get('[data-cy="notFoundMessage"]').contains('There are no items marked as done. Clean the filter here to see all items.').should('exist');
    cy.get('[data-cy="notFoundMessage"] > span').click();
    cy.get('[data-cy="buttonContainer"] > :nth-child(1)').find('svg').should('not.exist');
    cy.get('[data-cy="newItemInput"]').should('not.be.disabled')

    cy.get('[data-cy="buttonContainer"] > :nth-child(2)').click();
    cy.get('[data-cy="buttonContainer"] > :nth-child(2)').find('svg').should('exist');
    cy.get('[data-cy="notFoundMessage"]').contains('There are no items marked as pending. Clean the filter here to see all items.').should('exist');
    cy.get('[data-cy="notFoundMessage"] > span').click();
    cy.get('[data-cy="buttonContainer"] > :nth-child(2)').find('svg').should('not.exist');
    cy.get('[data-cy="newItemInput"]').should('not.be.disabled')

    cy.get('[data-cy="searchTaskInput"]').type("This task do not exist!")
    cy.get('[data-cy="notFoundMessage"]').contains('Your search found no results. Clean the search here to see all items.').should('exist');
    cy.get('[data-cy="notFoundMessage"] > span').click();
    cy.get('[data-cy="notFoundMessage"]').should('not.exist');
    cy.get('[data-cy="newItemInput"]').should('not.be.disabled')

    cy.get('[data-cy="searchTaskInput"]').type("This task do not exist!")
    cy.get('[data-cy="notFoundMessage"]').should('exist');
    cy.get('[data-cy="clearFiltersIcon"]').click();
    cy.get('[data-cy="notFoundMessage"]').should('not.exist');
  })

  it('check create new task', () => {
    cy.visit("http://localhost:3024")

    cy.get('[data-cy="newItemInput"]').type('Brand new task!');
    cy.get('[data-cy="newItemInput"]').should('have.value', 'Brand new task!');
    cy.get('[data-cy="newItemInput"]').next().click();
    cy.get('[data-cy="taskList"]').children().its('length').should('eq', 1);

    cy.get('[data-cy="newItemInput"]').type('Another task!');
    cy.get('[data-cy="newItemInput"]').next().click();
    cy.get('[data-cy="taskList"]').children().its('length').should('eq', 2);

  })
})