describe("Google", () => {
    beforeEach(() => {
        cy.visit('http://www.google.com')
    })
    it("searching for 'Platform One' yields search results", () => {
       /* YOUR CODE GOES BELOW THIS LINE */
            cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').type('Platform One')
            cy.get('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > div.tfB0Bf > center > input.gNO89b').click()
            cy.url().should('include', "Platform+One")
       /* NO CODE BELOW THIS LINE */
    })
})