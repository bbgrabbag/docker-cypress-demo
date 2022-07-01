
beforeEach(() => {
    cy.visit('/');
});

describe('initialize', () => {
    it('Should initialize app', () => {
        cy.get('#header-title').should('contain', 'Docker Container Test');
        cy.get('#increment-btn').should('exist');
        cy.get('#display-count').should('contain', '0');
    })
})

describe('counter', () => {
    it('Should increment on click', () => {
        cy.get('#increment-btn').click();
        cy.get('#display-count').should('contain', '1');
        cy.get('#increment-btn').click();
        cy.get('#display-count').should('contain', '2');
        cy.get('#increment-btn').click();
        cy.get('#display-count').should('contain', '3');
    })
})