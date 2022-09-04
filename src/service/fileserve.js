const { google } = require("googleapis");
var pdf = require('pdf-creator-node')
const fs = require("fs");
var html = fs.readFileSync(__dirname+"/sample.html", "utf8");

const GOOGLE_API_FOLDER_ID = '1Cc2Q65xtF_JpkjwYBP-4CP9HQIAbQmDk'

var document = {
    html: html,
    data: {
      users: users,
    },
    path: __dirname+"/output.pdf",
    type: "",
  };
  var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Sample pdf Creator</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
  ];
const stack = new Promise((resolve, reject)=>{
    pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
      //success creating pdf
      // then upload to drive
      uploadFile().then(data => {
        console.log(data)
        //https://drive.google.com/uc?export=view&id= 
        resolve("file uploaded")

    }).catch(err=>{
        console.log('error',err)
        reject(err)
    })
    })
    .catch((error) => {
      console.error(error);
      reject(err)
    });

});


async function uploadFile(){
    try{
        const auth = new google.auth.GoogleAuth({
            keyFile: __dirname+'/GDRIVE.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })

        const driveService = google.drive({
            version: 'v3',
            auth
        })

        const fileMetaData = {
            'name': 'output.pdf',
            'parents': [GOOGLE_API_FOLDER_ID]
        }

        const media = {
            mimeType: 'application/pdf',
            body: fs.createReadStream(__dirname+'/output.pdf')
        }

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            field: 'id'
        })
        return response.data.id

    }catch(err){
        console.log('Upload file error', err)
    }
}


module.exports = stack;
