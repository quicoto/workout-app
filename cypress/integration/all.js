describe('All', () => {
  it('Get random workout', () => {
    cy.visit('/');

    cy.get('.card-header').find('h3').then(($firstElement) => {
      let first;

      first = $firstElement.text();

      cy.get('button[name="newWorkout"]').click();

      let second;

      cy.get('.card-header').find('h3').then(($secondElement) => {
        second = $secondElement.text();

        expect(first).not.to.eq(second);
      });
    });
  });

  it('Find random workout and try to start it', () => {
    cy.visit('/');

    cy.get('.card-header').find('h3');
    cy.get('.card-header').find('.btn').click().then(() => {
      cy.get('.timer').find('.btn').contains('Start').click();
    });
  });

  it('List all the workouts', () => {
    cy.visit('workouts');

    cy.get('article.card').its('length').should('be.gt', 1);
  });

  it('List all the exercises', () => {
    cy.visit('exercises');

    cy.get('article.card').its('length').should('be.gt', 1);
  });

  it('Admin > List Exercises', () => {
    cy.visit('admin');

    cy.get('.tab-pane.active').find('table').find('tr').its('length')
      .should('be.gt', 1);
  });

  it('Admin > List Tags', () => {
    cy.visit('admin');

    cy.get('.nav-tabs').find('.nav-item').contains('Tags').click();

    cy.get('.tab-pane.active').find('table').find('tr').its('length')
      .should('be.gt', 1);
  });
});
