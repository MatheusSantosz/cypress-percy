
describe('TicketBOx', () => {
    beforeEach(() => cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html'));
    it('Check for the Initial state', () => {
        cy.percySnapshot() 
     });
 

});