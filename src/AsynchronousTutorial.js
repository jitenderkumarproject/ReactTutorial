export default function AsynchronousDemo()
{
const event = new Promise((resolve, reject) =>{
var name = "jack";
if(name == "jack")
{
    resolve(name);
}
else
{
    reject("Name is not" +name);
}
});

event
 .then((name) =>{
    console.log(name);
 })
 .catch((err) =>{
    console.log(err);
})
 .finally(()=>{
    console.log("Promiss Finished");
});
}