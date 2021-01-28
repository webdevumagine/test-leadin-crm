const express = require("express");
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/webhook/slimster', (req, res) => {
    let {
        id,
        price,
        lead,
        description
    } = req.body;

    let {
        gender,
        given_name,
        family_name,
        email,
        phone_number,
        address,
        product,
        latitude,
        longitude
    } = lead;

    let {
        street,
        house_number,
        postal_code,
        city,
        country
    } = address;


    console.log("Slimster Webhook Called");
    // console.log("req")
    // // console.log(email);  
    // console.log(req.body);
    // console.log("res")
    // // console.log(res);
    // console.log(name);

    var axios = require('axios');

    var config = {
    method: 'get',
    url: `https://b24-7yawpf.bitrix24.com/rest/6/v1km2r8yjuy521ft/crm.lead.add.json?FIELDS[TITLE]=${product.label} - ${given_name}&FIELDS[NAME]=${given_name}&FIELDS[LAST_NAME]=${family_name}&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[EMAIL][0][VALUE_TYPE]=WORK&FIELDS[PHONE][0][VALUE]=${phone_number}&FIELDS[PHONE][0][VALUE_TYPE]=WORK`,
    headers: { 
        'Cookie': 'BITRIX_SM_SALE_UID=0; qmb=.'
    }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });


    res.status(200).json({
        msg : "Slimster Webhook Called"
    })
});

// let queryData = {
//     id : "124-81784",
//     name: "Sverre de Haan",
//     email: "sh.dehaan@upcmail.nl",
//     phone: "06 81209275",
//     description: "Place 22 KWH on the outside wall as soon as possible. 3 Phase must be constructed and the maximum distance is <5 meters.",
//     street: "Louis Couperusstraat",
//     housenumber: "23",
//     'zip code': "1822LE",
//     city: "Alkmaar",
// }
// axios({
//     method : 'GET',

// })

app.listen(8000, (err) => {
    if(!err){
        console.log("Server Started")
    }
})