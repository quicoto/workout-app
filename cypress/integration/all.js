describe('All', () => {
  it('Find random workout and try to start it', () => {
    cy.visit('/');

    cy.get('.card-header').find('h3');
    cy.get('.card-header').find('.btn').click().then(() => {
      cy.get('.timer').find('.btn').contains('Start').click();
    });
  });

  it('Find out if the list works', () => {
    cy.visit('workouts');

    cy.get('article.card').its('length').should('be.gt', 1);
  });
});
