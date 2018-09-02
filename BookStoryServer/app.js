
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();
const basePath = path.join(__dirname + "/dist");

app.use(cors());

app.get(`/`, (req, res) => {
    let linkList = "";
    let resPage = fs.readFileSync("links.html", "utf-8");
    console.log(resPage);
    fs.readdir(basePath, (err, files) => {
        files.forEach((file) => {
            linkList += `<li><a href="/${file}" target="blank">${file}</a></li>`;
        })
        res.send(resPage.replace("placeHolder", linkList));
    });

});


fs.readdir(basePath, (err, files) => {
    files.forEach((file) => {
        app.use(express.static(`${basePath}/${file}`));
        app.get(`/${file}`, (req, res) => {
            res.sendFile(`${basePath}/${file}/index.html`);
        });
    })
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/api/person", (req, res) => {
    let currentList = require("./person.json");
    if (Validite(req.body) == true) {
        currentList.push(req.body)
        fs.writeFileSync("person.json", JSON.stringify(currentList));
        res.status(201).send(JSON.stringify(currentList));
    }
    else { res.status(400).send({ message: "soory" }) }

})

// curl -v -X POST -H "Content-type: application/json" -d "{\"Id\":\"206784001\", \"age\":\"12\",\"name\":\"tamar\", \"isMale\":\"true\",\"country\":\"Israel\" }" http://localhost:3500/api/person
let countries = require("./country.json");

function Validite(b) {

    if ((legalTz(b.Id)) == false)
        return false;
    if (b["age"] > 120 || b["age"] < 0)
        return false;
    if (b["name"].length > 15 || b["name"].length < 3)
        return false;
    if (typeof (JSON.parse(b["isMale"])) != 'boolean')
        return false;
    if (!(countries.includes(b["country"])))
        return false;
    return true;
}

let legalTz = (tz) => {
    let total = 0;
    for (i = 0; i < 9; i++) {
        let x = (((i % 2) + 1) * tz.charAt(i));
        total += Math.floor(x / 10) + x % 10;
    }
    console.log(total % 10 == 0);
    return (total % 10 == 0);
}




//end project
app.post("/api/register", (req, res) => {
    let users = require("./users.json");
    if (ValiditeRegister(req.body) == true) {
        users.push(req.body)
        fs.writeFileSync("users.json", JSON.stringify(users));
        res.status(201).send(JSON.stringify(users));
    }
    else { res.status(400).send({ message: "sorry" }) }

})
function ValiditeRegister(user) {
    if (user["firstName"].length < 2 || user["firstName"].length > 15 || !user["firstName"].match(/^[a-zA-Z]*$/))
        return false;
    if (user["lastName"].length < 2 || user["lastName"].length > 15 || !user["firstName"].match(/^[a-zA-Z]*$/))
        return false;
    if (user["userName"].length < 3 || user["userName"].length > 15 || !user["firstName"].match(/^[a-zA-Z]*$/))
        return false;
    if (user["Password"].length < 2 || user["Password"].length > 15 )
        return false;
    return true;
}
app.get("/api/login:user", (req, res) => {
    let users = require("./users.json");
    if (ValiditeRegister(req.body) == true) {
        if(users.includes())
        users.push(req.body)
        fs.writeFileSync("users.json", JSON.stringify(users));
        res.status(201).send(JSON.stringify(users));
    }
    else { res.status(400).send({ message: "sorry" }) }

});

function ValiditeLogin(user)
{
    if (user["userName"].length < 3 || user["firstName"].length > 15 || !user["firstName"].match(/^[a-zA-Z]*$/))
        return false;
    if (user["Password"].length < 5 || user["lastName"].length > 10 )
        return false;

    return true;
}
const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });

