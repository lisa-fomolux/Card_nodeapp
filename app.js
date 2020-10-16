// const express=require('express');
// const mongoose=require('mongoose');
// const cors=require('cors');

// const app=express();
// mongoose.connect('mongodb+srv://lisa:117599@clustermern.k6f8p.mongodb.net/房卡管理?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// app.use(cors())

// app.use(express.json())

// app.get('/', (req, res)=>{
//     res.send('app')
// })

// app.use('/cards', require('./routes/cards') )

// const PORT=process.env.PORT || 9001;
// app.listen(PORT, ()=>{
//     console.log(`server is running on port *${PORT}`)
// })

// // deploy heroku
// const http=require('http');
// const PORT=process.env.PORT || 9001;

// const server=http.createServer((req, res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World</h1>')
// })

// server.listen(PORT, ()=>{
//     console.log('server running at port *'+PORT);
// })


// deploy heroku
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

// const PORT=process.env.PORT || 9001;
// const http=require('http');
// const server=http.createServer(app)
// server.listen(PORT, ()=>{
//     console.log('server running at port *'+PORT);
// })

const http = require('http');
const port = process.env.PORT || 9001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
