const express = require('express');
const app = express();
const cors = require('cors')
const controllers = require('./Controllers/reviewcontrollers');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();



const router = express.Router();
app.use(cors());
app.use(express.json()); 



router.post("/api/insert",controllers.insert);
router.post("/api/delete",controllers.delete);
router.post("/api/update",controllers.update);
router.get("/api/get",controllers.get);

app.use(router);

// app.use(express.static(path.join(__dirname, "/client")));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
//   });



app.listen(process.env.PORT || "4000",(req,res)=>{
    console.log("running at port 4000")
})