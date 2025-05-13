const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const mongoUrl = 'mongodb+srv://antonren2000:orDvTB9oW5bnBAVx@cluster0.6a8ckig.mongodb.net/'
mongoose.connect(process.env.MONGO_CONNECT_ADRES,
  {
    useNewUrlParser: true
  })
  .then(()=> console.log('Connectet to Mongo'))
  .catch((e) => console.log('Не подключились к базе', e))

const app = express()

app.get('/', (req, res) => {
  res.send(JSON.stringify({result: 'ok'}))
})

try {
  app.listen(process.env.PORT)
} catch (e) {
  console.log('Ошибка поднятия сервера на порту:', process.env.PORT)
}

