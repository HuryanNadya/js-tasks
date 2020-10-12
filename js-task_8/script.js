let doc=document;  // записываем объект document в переменную
doc.querySelector("html").setAttribute("lang","en");

let head=doc.head; 

let meta =doc.createElement("meta");
meta.setAttribute("charset","UTF-8");
let link=doc.createElement("link");
link.setAttribute("href","https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
link.setAttribute("rel","stylesheet");
let title=doc.createElement("title");
title.innerHTML="Js8 Homework";


let style=doc.createElement("style");

let arrHead = [meta, link, title, style];
let i;
for (i=0; i<arrHead.length;i++) {
    head.appendChild(arrHead[i]);
}


let div=doc.createElement("div");  //чтобы не писать каждый раз создание div
let p=doc.createElement("p");     //чтобы не писать каждый раз создание p

let page=doc.createElement("div");
page.classList.add("page");
let script=doc.querySelector("script");
doc.body.insertBefore(page, script);


let header=doc.createElement("header");
header.classList.add("header");

let containerHeader=div.cloneNode();
containerHeader.classList.add("container");

let h1=doc.createElement("h1");
h1.innerHTML="Choose Your Option";

let pHeader=p.cloneNode();
pHeader.innerHTML="But I must explain to you how all this mistaken idea of denouncing ";

page.appendChild(header).appendChild(containerHeader).appendChild(h1);
containerHeader.appendChild(pHeader);

let section=doc.createElement("section");
section.classList.add("creator");

let containerSection=containerHeader.cloneNode(); //копируем .container общий 

let creatorWrapper=div.cloneNode();
creatorWrapper.classList.add("creator__wrapper")

page.appendChild(section).appendChild(containerSection).appendChild(creatorWrapper);

let creatorBlock=div.cloneNode();
creatorBlock.classList.add("creator__block");

let creatorName=div.cloneNode();
creatorName.classList.add("creator_name");
creatorName.innerHTML='Freelancer';

let h2=doc.createElement("h2");
h2.innerHTML='Initially designed to ';

let pCreatorBlock=p.cloneNode();
pCreatorBlock.innerHTML="But I must explain to you how all this mistaken idea of denouncing ";

let button=doc.createElement("button");
button.classList.add("button");
button.innerHTML='Start here';

let arrCreator = [creatorName, h2, pCreatorBlock, button];
for (i=0; i<arrCreator.length;i++) {
    creatorBlock.appendChild(arrCreator[i]);
}

let creatorBlock2=creatorBlock.cloneNode(true);
creatorBlock2.classList.add("creator__block_active");
creatorBlock2.querySelector(".creator_name").innerHTML="Studio";

creatorWrapper.appendChild(creatorBlock);
creatorWrapper.appendChild(creatorBlock2);


style.innerHTML=`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
    }
    h1, h2 {
        font-size: 36px;
        line-height: 48px;
        color: #212121;
    } 
    h1 {margin-bottom: 10px;}
    h2 {margin-bottom: 25px;} 
    button {
        background: none;
        border: 0;
    }
    .button {
        font-family: "Open Sans", sans-serif;
        border: 3px solid #FFC80A;
        padding: 17px 33px;
        font-weight: bold;
        color: #212121;
        text-transform: uppercase;
        border-radius: 50px;
    }      
    .page {
        min-width: 800px;
    }
    .container {
        width: 800px;
        margin: 0 auto;
        text-align: center;
    }
    .header {
        margin-top: 122px;
        margin-bottom: 55px;
    }
    .creator {
        margin-bottom: 122px;
    }
    .creator__wrapper {
        display: flex;
    }
    .creator__block {
        border: 1px solid #E8E9ED;
        padding: 81px;
    }
    .creator__block:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .creator__block:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .creator__block_active {
        border-color: #8F75BE;
        background: #8F75BE;
        color: #FFFFFF;
    }
    .creator_name {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 19px;
    }
    .creator__block_active .creator_name {
        color: #FFC80A;
    }
    .creator__block_active .button {
        color: #fff;
    }
    .creator__block p {
        margin-bottom: 58px;
    }
`;

