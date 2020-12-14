describe('All', () => {
  it('Get random workout', () => {
    cy.visit('/');

    cy.get('.card-header').find('h3').then(($firstElement) => {
      const first = $firstElement.text();

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

    cy.get('.nav-tabs').find('.nav-item').contains('Exercises').click();

    cy.get('.tab-pane.active').find('table').find('tr').its('length')
      .should('be.gt', 1);
  });

  it('Admin > Create Exercise', () => {
    const newExerciseName = 'Test New Exercise';

    cy.visit('admin');

    cy.get('.nav-tabs').find('.nav-item').contains('Exercises').click();

    cy.get('.tab-pane.active').find('#name').type(newExerciseName);
    cy.get('.tab-pane.active').find('#description').type('Lorem');
    cy.get('.tab-pane.active').find('button[type="submit"]').click()
      .then(() => {
        cy.window().then(
          (window) => {
            const data = JSON.parse(window.localStorage.getItem('workout_data')).value;
            const found = data.exercises.find((i) => i.name === newExerciseName);

            expect(found.name).to.have.string(newExerciseName);
          },
        );
      });
  });

  it('Admin > Create Workout', () => {
    const newWorkoutName = 'Test New Workout';
    const newWorkoutCreatedBy = 'Ricard';

    cy.visit('admin');

    cy.get('.nav-tabs').find('.nav-item').contains('Workouts').click();

    cy.get('.tab-pane.active').find('#name').type(newWorkoutName);
    cy.get('.tab-pane.active').find('#createdBy').type(newWorkoutCreatedBy);
    cy.get('.tab-pane.active').find('button[name="addRound"]').click();
    cy.get('.tab-pane.active').find('button[name="addRound"]').click()
      .then(() => {
        cy.get('select[name="exerciseList"]')
          .each(($select) => {
            cy.wrap($select).select('40').should('have.value', '40');
          })
          .then(() => {
            cy.get('.tab-pane.active').find('button[type="submit"]').click()
              .then(() => {
                cy.window().then(
                  (window) => {
                    const data = JSON.parse(window.localStorage.getItem('workout_data')).value;
                    const found = data.workouts.find((i) => i.name === newWorkoutName);

                    expect(found.name).to.have.string(newWorkoutName);
                    expect(found.createdBy).to.have.string(newWorkoutCreatedBy);
                  },
                );
              });
          });
      });
  });
});
