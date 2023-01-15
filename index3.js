const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.json("Web scrapper");
})
app.get('/restaurants',(req,res)=>{

    axios.get('https://www.sluurpy.in/jaipur/restaurants')
    .then(
    async (response) => {
        const html = response.data;
        // console.log(html);
        const details = [];
        const $ = cheerio.load(html);

        // restaurant name correct
        $('.box-ristorante-titolo').each((i, el) => {
            const item = $(el).find('strong').text();
            // console.log(item);
            details.push(name = item);
        });

        // restaurant review out of 100 correct
        // $('.box-ristorante-voto').each((i, el) => {
        //     const item = $(el).find('strong').text();
        //     // console.log(item);
        //     details.push({item});
        // });

        // restaurant review count correct 
        // if we use this then no need to use above one
        $('.box-ristorante-voto').each((i, el) => {
            const item = $(el).text();
            // console.log(item);
            details.push({item});
        });

        // // restaurant image link  correct
        $('.box-ristorante-immagine').each((i,el)=>{
            const item = $(el).attr('data-src');
            // console.log(item);
            details.push({item});
        })


        

        // book restaurant button incorect
        // $('.col-xs-12 col-md-6 box-ristorante').each((i,el)=>{
        //     const item = $(el).attr('href');
        //     console.log(item);
        // });
        // may be because of some card doesnot have image so it might be not working

        // $('.box-ristorante-tags').each((i,el)=>{
        //     const item = $(el).find('box-ristorante-tag').text();
        //     console.log(item);
        // })
        
        console.log(details);
        res.json(details);
    })  
        .catch((error) => {
        console.log(error);
    });
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})