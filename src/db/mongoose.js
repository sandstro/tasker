const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).catch(error => {
  console.error(error);
});