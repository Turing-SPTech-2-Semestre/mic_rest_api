const fetch = require('node-fetch');

exports.create = async (alertas) => {
    const url = "https://api.pipefy.com/graphql"
    let options;

    for (let i in alertas) {
        options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDExMzkzNDYsImVtYWlsIjoiZ2lhbi5hbmdlbG9zcEBnbWFpbC5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMjE3NzEyfX0.NbRGVJ072RgG2nSuzSax5Lko0RZPskQsUohSzCwF40TKNDsHTtMuaJb55e2sEhJlt2qIWxoLcCzaDxAwx1vXnw'
        },
        body: JSON.stringify({
            query: `
            mutation {
                createCard(input: {
                    pipe_id: 302856543,
                    title: "Alerta ${alertas[i].component}",
                    fields_attributes:[
                    {field_id: "qual_o_assunto_do_seu_pedido", field_value: "alerta ${alertas[i].component}"},
                    {field_id: "tipo", field_value: "Outros"}
                    {field_id: "informa_es_do_solicitante", field_value: "${alertas[i].fkMachine}"}
                    ]}
                ) {
                    card {
                    title
                    }
                }
            } 
            `
        })
        };

        await fetch(url, options)
    }
}