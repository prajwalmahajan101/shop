//Node Module import
const express =  require("express")
const bodyParser = require("body-parser")
const path = require("path")
//Own File import
const router = require("./routes")

//Create Const from The imports
const app = express()

//Templating Engine
app.set('view engine','ejs')
app.set('views','views')



//MiddleWare For Parsing Form Body
app.use(bodyParser.urlencoded({extended:false}))

// Statically Rendered File
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/img', express.static(path.join(__dirname, 'public/img')))

//Routers For the App
app.use(router)

//Server
app.listen(8080);