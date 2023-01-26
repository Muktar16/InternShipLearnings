import app from './app';
import sequelize from './config/database';
//import user from './models/user'
//user.sync({force: true})

//import todo from './models/todo';
// todo.sync({force: true})

// Db connection
sequelize
  //.sync()
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Failed!!! Please check your connection credentials!');
  });

// Express server
const port = process.env.PORT || 5432;
app.listen(port, () => {
  console.log(`The server is running on port ${port} in ${process.env.STAGE} mode`);
});
