const express = require("express");
const cors =require("cors");
const axios =require("axios");

const app =express();

//middle wares
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies",async (req, res) => {
const nameURL ="https://docs.openexchangerates.org/api/currencies-json?app_id=2146dd2fb6468fb4c26c2936299072";



try {
    const namesResponce = await axios.get(nameURL);
const nameData = namesResponce.data;
    return res.json(nameData);

} catch (error) {
    console.error(error);
    
}

})


//listen to a port

app.listen(5000,()=>{
    console.log("SERVER STARTED");
});