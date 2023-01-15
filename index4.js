const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.fabhotels.com/blog/places-to-visit-in-agra/')
    .then(
    async (response) => {
        const html = response.data;
        // console.log(html);
        const $ = cheerio.load(html);

        // places to visit list correct
        $('.entry-content').each((i, el) => {
            const item = $(el).find('h3').text();
            console.log(item);
        });

        // image link correct
        // $('.wp-caption').each((i,el)=>{
        //     const item = $(el).find('img').attr('src');
        //     console.log(item);
        // })

        // name correct 
        // $('.wp-caption').each((i,el)=>{
        //     const item = $(el).find('p').text();
        //     console.log(item);
        // })

        // description correct
        // $('.wp-caption').each((i,el)=>{
        //     const item = $(el).next().text();
        //     console.log(item);
        // })

        // timings correct
        // some places have timings mentioned some have not 
        // $('.wp-caption').each((i,el)=>{
        //     const item = $(el).next().next().text();
        //     console.log(item);
        // })

    })  
        .catch((error) => {
        console.log(error);
    });