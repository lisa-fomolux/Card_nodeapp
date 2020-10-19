const express=require('express');
const mongoose=require('mongoose');
// const cors=require('cors');
const path=require('path');

const app=express();
mongoose.connect('mongodb+srv://lisa:117599@clustermern.k6f8p.mongodb.net/房卡管理?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

app.use(express.json())

// app.get('/client', (req, res)=>{
//     // res.send('app')
// })

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// app.use('/cards', require('./routes/cards') )
app.get('/', (req, res)=>{
    Card.find()
    .then(data=>res.json(data))
    .catch(err=>console.log(err))
})

const PORT=process.env.PORT || 9001;
app.listen(PORT, ()=>{
    console.log(`server is running on port *${PORT}`)
})
