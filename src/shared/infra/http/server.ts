import exppress from 'express'

const app = exppress()
app.use(exppress.json())

app.get('/', (request, response) => {
  response.send({ name: 'hello world' })
})

app.listen(5002, () => {
  console.log('SERVER STARTED ON PORT 5002')
})
