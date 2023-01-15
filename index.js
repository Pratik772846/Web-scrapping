const request  = require('request');
const cheerio  = require('cheerio');

request('https://reactjs.org/docs/lifting-state-up.html',(error,response,html)=>{
    if(!error && response.statusCode == 200){
        // console.log(html);
        const $ = cheerio.load(html);
        const heading  = $('.css-1obw60b');
        console.log(heading.html());
        // const heading1  = $('.css-6nf64v');
        $('.css-6nf64v').each((i,el)=>{
            // const item = $(el).find('p').text();
            // console.log(item);

            const link = $(el).find('p').find('a').attr('href');
            console.log(link);
        });

    }
});
