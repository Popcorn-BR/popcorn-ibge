export default (endpoint) => fetch('https://servicodados.ibge.gov.br/api/v1/' + endpoint).then(data => data.json())
