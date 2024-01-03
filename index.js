const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

// 練習用サイトでwebスクレイピングにトライ
const URL = "https://appletools.blog/scraping-practice/";
const data = [];

axios(URL).then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);

    const $ = cheerio.load(htmlParser);

    $("#customer-comments", htmlParser).each(function() {
        const comment = $(this).find(".comment").text();
        console.log(comment);
        data.push({ comment });
        console.log(data);
    });
})
.catch((error) => console.log(error));

app.listen(PORT, console.log("server running!"));