const path = require('path')
const express = require('express')
const hbs = require('hbs')
const  query  = require('express')
const forecast = require('./forecast')
const geocode = require('./geocodee')

const app = express()
const port = process.env.PORT || 3000

//defining paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../Templates/views')
const partialspath = path.join(__dirname, '../Templates/partials')

//set handlebars engine and views
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialspath)

//setting static libary to the server
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index', {
        anime: 'deathnote',
        hero: 'batsy',
        name: 'Batsy'
    })
})

app.get('/about',(req,res)=>{
    res.render('about', {
        anime: 'deathnote',
        hero: 'batsy',
        name: 'Batsy'
    })
})

app.get('/help',(req,res)=>{
    res.render('help', {
        anime: 'deathnote',
        hero: 'batsy',
        name: 'Batsy'
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404', {
        errror: 'help not found',
        name: 'Batsy'
    })
})

app.get('/we', (req, res) => {

    if(!req.query.address)
    {
        return res.send({
            error: 'you must provide the address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location}= {}) => {

        if (error) {
            return res.send({error: 'error'})
        }

        forecast(latitude, longitude, (error, fdata) => {

            if (error) {
                return res.send({error: 'error'})
            }

            res.send({
                location: location,
                forecast: fdata
            })
        })
    })    
})

app.get('/*',(req,res)=>{
    res.render('404', {
        errror: 'helppp not found',
        name: 'Batsy'
    })
})



app.listen(port, () => {
    console.log('Server is up on port. '+ port)   
})