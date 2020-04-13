
let express = require('express')
let app = express()
//var ejsLayouts = require('express-ejs-layouts')
let methodOverride = require('method-override')

app.set('view engine', 'ejs')
//app.use(ejsLayouts)
app.use(methodOverride('_method'))

app.use(express.static('static'))
app.use(express.urlencoded({extended: false}))
app.use('/dinosaurs', require('./controllers/dinosaurs'))


app.listen(3000);