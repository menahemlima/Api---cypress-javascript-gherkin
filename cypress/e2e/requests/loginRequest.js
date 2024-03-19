Cypress.Commands.add('loginSuccessfully', (usuario, senha) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('url')+'login',
        headers: {
            'accept': 'application/xml',
        },
        failOnStatusCode: true,
        body: {
            "email": usuario,
            "password": senha
        }
    })
})

Cypress.Commands.add('loginUnsuccessfully', (usuario, senha) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('url')+'login',
        headers: {
            'accept': 'application/xml',
        },
        failOnStatusCode: false,
        body: {
            "email": usuario,
            "password": senha
        }
    })
})