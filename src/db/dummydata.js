const {mysqlc, connection} = require('../db/dbcon');
const dbn = require('../appData/dbdata').tables;
connection;
const docc = dbn.doctorMaster.column;
const prodc= dbn.productMaster.column;
const custc = dbn.customer.column;
const dummyDoctorMaster = [
  { [docc.id]:"retrt345433", [docc.name]:"Dr Rajesh", [docc.email]:"rajes@dummymail.com", [docc.phone]:"3423243435", [docc.address]:"sdfrtewrr, wrtwf. 895059"},
  { [docc.id]:"rer2454", [docc.name]:"Dr Steve", [docc.email]:"steve@dummymail.com", [docc.phone]:"53434", [docc.address]:"deter, wrtwf. 895059"},
  { [docc.id]:"gwew233545", [docc.name]:"Dr jenny", [docc.email]:"jenny@dummymail.com", [docc.phone]:"894546553", [docc.address]:"efrtyrtr, wrtwf. 895059"},
  { [docc.id]:"g23dsfrt", [docc.name]:"Dr Mercy", [docc.email]:"mercy@dummymail.com", [docc.phone]:"84534423453", [docc.address]:"sdfrtewrr, wrtwf. 895059"},
  { [docc.id]:"r233453234", [docc.name]:"Dr Ram", [docc.email]:"ram@dummymail.com", [docc.phone]:"236574434", [docc.address]:"sdfe234, 3r4r. 895059"},
  { [docc.id]:"f233532323d", [docc.name]:"Dr Parth", [docc.email]:"parth@dummymail.com", [docc.phone]:"12147665", [docc.address]:"yurerer, wrtwf. 895059"},
  { [docc.id]:"23sw334", [docc.name]:"Dr kamal", [docc.email]:"kamal@dummymail.com", [docc.phone]:"7435455656", [docc.address]:"sdfderr, trerer. 895059"}
];

const productMaster = [
  {[prodc.name]:"juice for health",[prodc.price]:"247",[prodc.retailPrice]:"235", [prodc.salePrice]:"210",[prodc.SKU]:"243323",[prodc.taxId]:"12"},
  {[prodc.name]:"tab for health",[prodc.price]:"27",[prodc.retailPrice]:"23", [prodc.salePrice]:"21",[prodc.SKU]:"23323",[prodc.taxId]:"13"},
  {[prodc.name]:"meta health routine tab",[prodc.price]:"2400",[prodc.retailPrice]:"2350", [prodc.salePrice]:"2100",[prodc.SKU]:"93323",[prodc.taxId]:"13"},
  {[prodc.name]:"delta tab 1mg",[prodc.price]:"4650",[prodc.retailPrice]:"4600", [prodc.salePrice]:"4577",[prodc.SKU]:"545323",[prodc.taxId]:"14"},
  {[prodc.name]:"Gym booster for health",[prodc.price]:"350",[prodc.retailPrice]:"300", [prodc.salePrice]:"256",[prodc.SKU]:"2756323",[prodc.taxId]:"15"},
  {[prodc.name]:"citrus for health 1000ml",[prodc.price]:"2800",[prodc.retailPrice]:"2700", [prodc.salePrice]:"2567",[prodc.SKU]:"268723",[prodc.taxId]:"16"},
  {[prodc.name]:"Zinc for health 200mg",[prodc.price]:"2500",[prodc.retailPrice]:"2200", [prodc.salePrice]:"2178",[prodc.SKU]:"9565623",[prodc.taxId]:"17"},
  {[prodc.name]:"Calcium 300ml",[prodc.price]:"1550",[prodc.retailPrice]:"1500", [prodc.salePrice]:"1456",[prodc.SKU]:"0237353",[prodc.taxId]:"18"},
];
const customeMaster = [
  {[custc.age]:"30", [custc.email]:"sameasdwe.asas.com",[custc.gender]:"male",[custc.phone]:"456323243", [custc.name]:"sam"},
  {[custc.age]:"34", [custc.email]:"qerqr.sfe.com",[custc.gender]:"male",[custc.phone]:"456323243", [custc.name]:"jav"},
  {[custc.age]:"20", [custc.email]:"qwrer.45.com",[custc.gender]:"female",[custc.phone]:"456323243", [custc.name]:"dev"},
  {[custc.age]:"60", [custc.email]:"asdge.asas.com",[custc.gender]:"male",[custc.phone]:"456323243", [custc.name]:"mandy"},
  {[custc.age]:"78", [custc.email]:"sametedgt.com",[custc.gender]:"female",[custc.phone]:"456323243", [custc.name]:"sandy"},
]

const dummydata = [
    {appointmentID: "122422323",name : "sam",phone:"234354545",email:"sample@dummy.email",consultDate:"2022-09-08", consultTime:"13:45",doctorAlloted:"r78fb1631079243870", doctorName:"Dr Mark", status:"Attended"},
    {appointmentID: "352345",name : "ram",phone:"8676767675",email:"sample@dummy.email",consultDate:"2022-09-08", consultTime:"14:55",doctorAlloted:"r3c101612160643052", doctorName:"Dr Priya", status:"Not Attended"},
    {appointmentID: "35564343",name : "steve",phone:"56443435",email:"sample@dummy.email",consultDate:"2022-09-06", consultTime:"11:23",doctorAlloted:"r3c101612160643052", doctorName:"Dr Priya", status:"Attended"},
    {appointmentID: "63435",name : "john",phone:"565354545",email:"sample@dummy.email",consultDate:"2022-09-06", consultTime:"17:56",doctorAlloted:"r78fb1631079243870", doctorName:"Dr RajaMohan", status:"Not Attended"},
    {appointmentID: "2323swer23",name : "mathew",phone:"57545786644",email:"sample@dummy.email",consultDate:"2022-09-10", consultTime:"15:45",doctorAlloted:"r78fb1631079243870", doctorName:"Dr RajaMohan", status:"Attended"},
    {appointmentID: "1334ad",name : "Cruez",phone:"63447884435",email:"sample@dummy.email",consultDate:"2022-09-08", consultTime:"12:35",doctorAlloted:"r78fb1631079243870", doctorName:"Dr Mark", status:"Not Attended"},
    {appointmentID: "j45574",name : "jenny",phone:"895443545763",email:"sample@dummy.email",consultDate:"2022-09-10", consultTime:"17:30",doctorAlloted:"r78fb1631079243870", doctorName:"Dr RajaMohan", status:"Not Attended"},
    {appointmentID: "f2452324",name : "suresh",phone:"2344645434",email:"sample@dummy.email",consultDate:"2022-09-08", consultTime:"12:55",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Not Attended"},
    {appointmentID: "vsw423534",name : "ramesh",phone:"23457655454",email:"sample@dummy.email",consultDate:"2022-09-10", consultTime:"18:55",doctorAlloted:"r78fb1631079243870", doctorName:"Dr Mark", status:"Not Attended"},
    {appointmentID: "2344zdsrgr",name : "pari",phone:"2457554545",email:"sample@dummy.email",consultDate:"2022-09-08", consultTime:"18:00",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Not Attended"},
    {appointmentID: "w32343435",name : "sari",phone:"23467545464",email:"sample@dummy.email",consultDate:"2022-09-10", consultTime:"13:00",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Not Attended"},
    {appointmentID: "4542343fd",name : "priya",phone:"25643435534534",email:"sample@dummy.email",consultDate:"2022-09-06", consultTime:"12:55",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Attended"},
    {appointmentID: "2434xcwe",name : "sham",phone:"234563232434",email:"sample@dummy.email",consultDate:"2022-09-11", consultTime:"18:00",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Attended"},
    {appointmentID: "2434343cd",name : "Oliver",phone:"24574343545",email:"sample@dummy.email",consultDate:"2022-09-06", consultTime:"16:45",doctorAlloted:"r78fb1631079243870", doctorName:"Dr RajaMohan", status:"Attended"},
    {appointmentID: "wewr1341f",name : "ELIZABETH",phone:"244563423434",email:"sample@dummy.email",consultDate:"2022-09-11", consultTime:"19:50",doctorAlloted:"r78fb1631079243870", doctorName:"Dr Mark", status:"Attended"},
    {appointmentID: "d343524",name : "Atharv",phone:"2455653434",email:"sample@dummy.email",consultDate:"2022-09-11", consultTime:"14:20",doctorAlloted:"r3c101612160643052", doctorName:"Dr Priya", status:"Not Attended"},
    {appointmentID: "34v3r3r",name : "Ayaan",phone:"2446323443",email:"sample@dummy.email",consultDate:"2022-09-11", consultTime:"15:30",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Attended"},
    {appointmentID: "sw2324v4",name : "Bakhshi",phone:"08ytt6t",email:"sample@dummy.email",consultDate:"2022-09-08", consultTime:"12:45",doctorAlloted:"r3c101612160643052", doctorName:"Dr Priya", status:"Not Attended"},
    {appointmentID: "12343cv34",name : "Parth",phone:"977t578787",email:"sample@dummy.email",consultDate:"2022-09-08", consultTime:"11:45",doctorAlloted:"r78fb1631079243870", doctorName:"Dr Mark", status:"Not Attended"},
    {appointmentID: "233c3r44",name : "Pranav",phone:"8763447777",email:"sample@dummy.email",consultDate:"2022-09-09", consultTime:"13:05",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Attended"},
    {appointmentID: "c2344523fd",name : "Praneel",phone:"3256753454",email:"sample@dummy.email",consultDate:"2022-09-06", consultTime:"16:30",doctorAlloted:"r78fb1631079243870", doctorName:"Dr RajaMohan", status:"Attended"},
    {appointmentID: "2453c2332",name : "Pranit",phone:"u542458986546",email:"sample@dummy.email",consultDate:"2022-09-06", consultTime:"13:50",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Not Attended"},
    {appointmentID: "23d3rd3er",name : "Qabil",phone:"7843678",email:"sample@dummy.email",consultDate:"2022-09-05", consultTime:"13:50",doctorAlloted:"r78fb1631079243870", doctorName:"Dr Mark", status:"Attended"},
    {appointmentID: "x23233d23",name : "Rachit",phone:"854324589",email:"sample@dummy.email",consultDate:"2022-09-05", consultTime:"18:00",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Attended"},
    {appointmentID: "23c34fc3434",name : "Raghav",phone:"077645768",email:"sample@dummy.email",consultDate:"2022-09-10", consultTime:"14:00",doctorAlloted:"r2ff71626502189641", doctorName:"Dr Marqee", status:"Attended"},
]

const products = [];
function dummydataTable() {
let i=0;
    for(i ; i<dummydata.length; i++){
      mysqlc.query(`INSERT INTO appointmenttest (appointmentID,name, phone, email, consultDate, consultTime, doctorAlloted, doctorName, status )  
      VALUES("${dummydata[i].appointmentID}","${dummydata[i].name}", "${dummydata[i].phone}", "${dummydata[i].email}", "${dummydata[i].consultDate}", "${dummydata[i].consultTime}",
        "${dummydata[i].doctorAlloted}", "${dummydata[i].doctorName}", "${dummydata[i].status}")`,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            //console.log(result);
          }
        }
      );
    }
    

  }
module.exports = dummydataTable;