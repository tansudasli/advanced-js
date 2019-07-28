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
   
   - app.use(express.urlencoded({ extended: false }));  #to parse body in POST requests
   - app.use(express.static(path.join(__dirname, 'public'))); #give permission to access public folder
   - app.use(
   

   
   + app.use(‘/’, ‘./routes/index’)
        - router.get(‘/‘, (req, res, next) => {        #routes/index.js    
               res.render(‘index’, {title: ‘title’})
               or
               res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
          }) 
   + app.use(‘/users’, ‘./routes/users’)
   + app.use((req, res, next) => {                      #cath 404
        next(createError(404))
     })


```
