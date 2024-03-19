import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import '../requests/loginRequest'

Given(`que eu desejo realizar login na api`, () => {
    
});

When(`envio uma requisição com o usuário {} e senha {}`, (usuario, senha) => {
    cy.loginSuccessfully(usuario,senha).then((res) => {
        response = res
    })
});

When(`envio uma requisição com dados inválidos {}, {}`, (usuario, senha) => {
    cy.loginUnsuccessfully(usuario,senha).then((res) => {
        response = res
    })
});

Then(`o login deve ser realizado com sucesso {}`, (codigoStatus) => {
    cy.fieldComparison(response.status,parseInt(codigoStatus))
});

Then(`o login não deve ser realizado com sucesso {}`, (codigoStatus) => {
    cy.fieldComparison(response.status,parseInt(codigoStatus))
});

Then(`o token deve ser gerado corretamente`, () => {
    cy.fieldIsNotEmpty(response.body.token)
});

Then(`o token não deve ser gerado corretamente {}`, (mensagemErro) => {
    cy.fieldComparison(response.body.error,mensagemErro)
});