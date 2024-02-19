describe('Tests on app open', () => {
  beforeEach(() => {
    const tasks = [
      {
        id: 1,
        completed: true,
        taskText: 'Task in localstorage.',
      },
      {
        id: 2,
        completed: false,
        taskText: 'Another task in localstorage as well.',
      },
    ];

    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
  });

  afterEach(() => {
    localStorage.removeItem('tasks');
  });

  it('check colected tasks from localstorage', () => {
    cy.visit("http://localhost:3024")

    cy.get('[data-cy="taskList"]').children().its('length').should('eq', 2);
    cy.get('[data-cy="progressBar"]').then($progressBar => {
      const valorAtual = $progressBar[0].ariaValueNow;
      cy.wrap(null).should(() => {
        expect(valorAtual).to.be.eq('50');
      });
    });
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
    cy.get('[data-cy="newItemInput"]').should('be.disabled')
    cy.get('[data-cy="taskList"]').children().its('length').should('eq', 1);

    cy.get('[data-cy="buttonContainer"] > :nth-child(2)').click();
    cy.get('[data-cy="buttonContainer"] > :nth-child(2)').find('svg').should('exist');
    cy.get('[data-cy="newItemInput"]').should('be.disabled')
    cy.get('[data-cy="newItemInput"]').should('be.disabled')
    cy.get('[data-cy="taskList"]').children().its('length').should('eq', 1);

    cy.get('[data-cy="searchTaskInput"]').type("This task do not exist!")
    cy.get('[data-cy="newItemInput"]').should('be.disabled')
    cy.get('[data-cy="notFoundMessage"]').contains('There are no items marked as pending. Clean the filter here to see all items.').should('exist');
    cy.get('[data-cy="notFoundMessage"] > span').click();
    cy.get('[data-cy="notFoundMessage"]').should('not.exist');
    cy.get('[data-cy="newItemInput"]').should('not.be.disabled')
    cy.get('[data-cy="taskList"]').children().its('length').should('eq', 2);
  })

  it('check create new task', () => {
    cy.visit("http://localhost:3024")

    cy.get('[data-cy="newItemInput"]').type('Brand new task!');
    cy.get('[data-cy="newItemInput"]').should('have.value', 'Brand new task!');
    cy.get('[data-cy="newItemInput"]').next().click();
    cy.get('[data-cy="taskList"]').children().its('length').should('eq', 3);

    cy.get('[data-cy="newItemInput"]').type('Another task!');
    cy.get('[data-cy="newItemInput"]').next().click();
    cy.get('[data-cy="taskList"]').children().its('length').should('eq', 4);

    cy.get('[data-cy="progressBar"]').then($progressBar => {
      const valorAtual = $progressBar[0].ariaValueNow;
      cy.wrap(null).should(() => {
        expect(valorAtual).to.be.eq('25');
      });
    });
  })

  it.only('check edit task', () => {
    cy.visit("http://localhost:3024")

    cy.wait(150)
    cy.get('[data-cy="progressBar"]').then($progressBar => {
      const valorAtual = $progressBar[0].ariaValueNow;
      cy.wrap(null).should(() => {
        expect(valorAtual).to.be.eq('50');
      });
    });
    cy.get('[data-cy="openTask2"]').click()
    cy.get('[data-cy="editTaskId2"] > :nth-child(2)').children().eq(1).click();

    cy.get('[data-cy="progressBar"]').then($progressBar => {
      const valorAtual = $progressBar[0].ariaValueNow;
      cy.wrap(null).should(() => {
        expect(valorAtual).to.be.eq('100');
      });
    });

    cy.get('[data-cy="editTaskId2"] > :nth-child(2)').children().eq(1).click();
    cy.get('[data-cy="progressBar"]').then($progressBar => {
      const valorAtual = $progressBar[0].ariaValueNow;
      cy.wrap(null).should(() => {
        expect(valorAtual).to.be.eq('50');
      });
    });

    cy.get('[data-cy="inputEditTaskId2"]').type("{backspace}, but editted.")
    cy.get('[data-cy="modalContent"]').click()
    cy.get('[data-cy="openTask2"]> :nth-child(1)' ).contains('Another task in localstorage as well, but editted.').should('exist')

    cy.get('[data-cy="newItemInput"]').type('Task to be deleted.');
    cy.get('[data-cy="newItemInput"]').next().click();
    cy.get('[data-cy="searchTaskInput"]').type("Task to be deleted.")
    cy.get('[data-cy="openTask3"]').click();
    cy.get('[data-cy="editTaskId3"] > :nth-child(2)').children().eq(0).click();
    cy.get('[data-cy="taskList"]').children().its('length').should('eq', 2);

  })
})