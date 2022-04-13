/// <reference types="cypress" />

describe('Task List', () => {

    before(() => {
        cy.visit('http://localhost:3000/')
    });

    it('should display current date', () => {
        const date = new Date();
        const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        cy.get('[data-cy=date-day]').should('contain', date.getDate().toString().padStart(2, '0'));
        cy.get('[data-cy=date-month]').should('contain', months[date.getMonth()]);
        cy.get('[data-cy=date-weekday]').should('contain', weekDays[date.getDay()]);
        cy.get('[data-cy=date-year]').should('contain', date.getFullYear());
    });

    it('should display an empty list by default', () => {
        cy.get('[data-cy=task-item]').should('have.length', 0);
    });

    it('should diplay empty progress bar by default', () => {
        cy.get('[data-cy=progress-bar]').invoke('css', 'width').should('equal', '0px');
    });

    it('should add some tasks', () => {
        let tasksDescriptions = ['Task 1', 'Task 2', 'Task 3'];
        tasksDescriptions.forEach(taskDescription => {
            cy.get('[data-cy=new-task-input]').type(taskDescription);
            cy.get('[data-cy=new-task-button]').click();
        })

        cy.get('[data-cy=task-item]').should('have.length', 3);
    });

    it('should display default messages when filter', () => {
        cy.get('[data-cy=filter-done').click();
        cy.get('[data-cy=message]').should('have.length', 1);
        cy.get('[data-cy=clear-filter-link]').click();

        cy.get('[data-cy=filter-pending]').click();
        cy.get('[data-cy=search-items-input]').type('zzzzzzz');
        cy.get('[data-cy=message]').should('have.length', 1);
        cy.get('[data-cy=clear-filter-link]').click();
    })

    it('should complete and filter tasks', () => {
        cy.get('[data-cy=task-item]').first().click();
        cy.get('[data-cy=complete-item-button]').click();
        cy.get('[data-cy=filter-done]').click();
        cy.get('[data-cy=new-task-input]').should('have.length', 0);
        cy.get('[data-cy=task-item]').should('have.length', 1);
        cy.get('[data-cy=filter-done]').click();
    });

    it('should edit task and complete', () => {
        cy.get('[data-cy=task-item]').first().click();
        cy.get('[data-cy=task-item-input]').clear().type('Task 1 edited');
        cy.get('[data-cy=complete-item-button]').click();
    });

    it('should display gif when completed all tasks', () => {
        cy.get('[data-cy=task-item]').first().click();
        cy.get('[data-cy=complete-item-button]').click();
        cy.get('[data-cy=progress-gif]').should('be.visible');
    });
});