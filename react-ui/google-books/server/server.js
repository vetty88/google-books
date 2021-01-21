const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV === 'production'){
  const path  =  require('path');
  app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  });
}

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});