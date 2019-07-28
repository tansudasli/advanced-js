# basic-expressapp-nodejs



### General Structure

```
+ app.js
   - app = express()
   
   - app.set(‘views’, path.join(__dirname, ‘views’))                
          extends layout                       #views/index.pug
          block content
               h1= title
               p Welcome to #{title}
   - app.set(‘view engine’, ‘pug’)
   
   - app.use(
   - app.use(
   
   + app.use(‘/’, ‘./routes/index’)
        - router.get(‘/‘, (req, res, next) => {        #routes/index.js    
               res.render(‘index’, {title: ‘title’})
          }) 
   + app.use(‘/users’, ‘./routes/users’)


```