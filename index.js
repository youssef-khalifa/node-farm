const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require('slugify');
const replaceTemplate=require("./modules/replaceTemplate")
/////////////////////////////////////////////
// const textIn = fs.readFileSync(`./txt/input.txt`, "utf-8");

// const textOut = `this is kamikaze : ${textIn}.\nCreated in cyperon ${Date.now()}`;
// fs.writeFileSync("./txt/output1.txt", textOut);
// const textInme = fs.readFileSync(`./txt/output1.txt`, "utf-8");
// console.log(textInme);

// //non-blocking async
// fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2)

//     })
// })
/////////////////////////////////////////
//server

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  //const pathName = req.url;
  //overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
    //api page
  } else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
    // not found
  } else {
    res.writeHead(404, {
      "Content-type": "text.html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to reqs on poooort");
});
