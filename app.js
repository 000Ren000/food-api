const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Food = require('./models/Food')
require('dotenv').config()


mongoose.connect(process.env.MONGO_CONNECT_ADRES + 'food-api',
  {
    useNewUrlParser: true
  })
  .then(() => console.log('Connectet to Mongo'))
  .catch((e) => console.log('Не подключились к базе', e))

const app = express()

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.get('/ping', (req, res) => res.send({result: 'pong', }))

app.post('/create', async (req, res) => {
  try {
    const { name, carbohydrates, dryWeight, finishedProductWeight } = req.body
    const food = await Food.create({ name, carbohydrates, dryWeight, finishedProductWeight})

    res.send(JSON.stringify({
        result: 'Карточка продукта создана успешно',
        food
      }
    ))
  } catch (e) {
    console.log(e.message)
    res.send(JSON.stringify({
        result: 'Ошибка создания карточки продукта'
      }
    ))
  }
})

app.get('/getall', async (req, res) => {
  try {
    const foods = await Food.find({})
    res.send({
      result: 'ok',
      foods
    })
  } catch (e) {
    console.log(e)
    res.send(
      {
        result: 'Ошибка получения продуктов'
    }).status(400)
  }
})

try {
  app.listen(process.env.PORT)
} catch (e) {
  console.log('Ошибка поднятия сервера на порту:', process.env.PORT)
}

