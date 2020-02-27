const fetch = require('node-fetch');
Headers = fetch.Headers;

const headers = new Headers()
headers.append("Content-Type", "application/json")

const body = {
    "rg": "49306808",
    "phones": [ "(11) 999999999" ],
    "name": "Teste Testetovisky",
    "id": 409559547,
    "gender": "F",
    "enem": null,
    "emails": [ "karoline.setoue@quero.com" ],
    "document_expeditor": "SSP - Secretaria de Segurança Pública",
    "cpf": "406.559.358-19",
    "birth_date": "1993-04-21",
    "address_information": {
      "state": "SP",
      "postal_code": "04105-000",
      "number": "194",
      "neighborhood": "Vila Mariana",
      "complement": null,
      "city": "São Paulo",
      "address": "Rua Doutor Nicolau de Sousa Queirós"
    }
  }

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://enpgyltm8zz8fp5.m.pipedream.net", options)
