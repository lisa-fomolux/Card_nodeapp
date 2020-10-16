const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
mongoose.connect('mongodb+srv://lisa:117599@clustermern.k6f8p.mongodb.net/房卡管理?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(cors())

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('app')
})

app.use('/cards', require('./routes/cards') )

const PORT=process.env.PORT || 9001;
app.listen(PORT, ()=>{
    console.log(`server is running on port *${PORT}`)
})
