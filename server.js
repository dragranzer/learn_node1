let express = require('express')
let app = express()

const PORT = 8080

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`)
})
