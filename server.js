const cors = require('cors')
const path = require('path')
const book = require('./models/book')

// prevents cors headaches when your react app calls your api
app.use(cors())

// serves the built version of your react app
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// for your REST calls, append api to the beginning of the path
// ex: 
app.get('/api/books', async (req, res) => {
  try {
    res.json(await book.find())
    // book is a mongoose schema we've defined in /models
    // .find() is a method on the model for fetching all documents
  } catch (err) {
    res.json({message: err})
  }
})

// ensures the proxy we set earlier is pointing to your express api
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});