Cypress.Commands.add('fieldComparison', (value, expectedValue) => {
    expect(expectedValue).to.eq(value)
  })
  
  Cypress.Commands.add('fieldIsNotEmpty', (fieldValue) => {
    expect(fieldValue).to.not.be.empty
  })
  
  Cypress.Commands.add('fieldInclude', (fieldValue, value) => {
    expect(fieldValue).to.include(value);
  })