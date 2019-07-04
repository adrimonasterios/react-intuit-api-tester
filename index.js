const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')


const app = express();
const PORT = process.env.PORT || 8000;
console.log('dirname');
console.log(__dirname);

app.use(express.static(`${__dirname}/client/build`));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api', require('./server/api'));
app.get('*', function(request, response) {
  response.sendFile(path.resolve(`${__dirname}/client/build`, 'index.html'));
});


app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
