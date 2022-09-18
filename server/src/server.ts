import express from 'express'

//const express = require('express'); Importação indireta das ferramentas do express
// ECMAScript Modes

const app = express()


app.get('/ads',  (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' },
    ])
})

//localhost:3333/ads
app.listen(3333)