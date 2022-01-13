import express, {Router} from 'express';
import mongoose from 'mongoose';
import Routes from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT =8000;

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/users',Routes)

const URL='mongodb://raianibnfaiz:01703371469@merncrud-shard-00-00.nvu2w.mongodb.net:27017,merncrud-shard-00-01.nvu2w.mongodb.net:27017,merncrud-shard-00-02.nvu2w.mongodb.net:27017/MernCrud?ssl=true&replicaSet=atlas-5ul1fr-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 
    
    //it returns a promise 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})


