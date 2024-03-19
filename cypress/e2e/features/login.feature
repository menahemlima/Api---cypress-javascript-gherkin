# language: pt
Funcionalidade: Login na api

  @regression
  Cenario: 01 - Realizar login com sucesso
    Dado que eu desejo realizar login na api
    Quando envio uma requisição com o usuário <usuario> e senha <senha>
    Então o login deve ser realizado com sucesso <codigoStatus>
    E o token deve ser gerado corretamente

    Exemplos: 
      | usuario            | senha        | codigoStatus |
      | eve.holt@reqres.in | cityslicka   |          200 |

  @regression
  Cenario: 02 - Realizar login com falha
    Dado que eu desejo realizar login na api
    Quando envio uma requisição com dados inválidos <usuario>, <senha>
    Então o login não deve ser realizado com sucesso <codigoStatus>
    E o token não deve ser gerado corretamente <mensagemErro>

    Exemplos: 
      | usuario | senha | codigoStatus | mensagemErro   |
      | 123     |  123  |          400 | user not found |
