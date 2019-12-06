let express = require('express');
let app = express();
let path = require('path');
let QRCode = require('qrcode');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(8080);

//---------------------------------------------------------------------------------------------------------------
// ACTUALLY USEFUL CODE
//---------------------------------------------------------------------------------------------------------------

// generate the QR-Code in the terminal
const generateQRTerminal = async text => {
    try {
        console.log(await QRCode.toString(text, {type: 'terminal'}))
    } catch (err) {
        console.error(err)
    }
};

// generate the QR-Code as png
const generateQRPicture = async text => {
    try {
        await QRCode.toFile('./qrcode.png', text);
    } catch (err) {
        console.error(err)
    }

};

// generate the QR-Code as png
const generateQRURI = async text => {
    try {
        console.log(await QRCode.toDataURL(text))
    } catch (err) {
        console.error(err)
    }
};

//---------------------------------------------------------------------------------------------------------------
//generate here
let text = 'test 123';
generateQRPicture(text);