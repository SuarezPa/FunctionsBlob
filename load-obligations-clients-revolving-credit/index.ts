import { AzureFunction, Context } from "@azure/functions"


const blobTrigger: AzureFunction = async function (context: Context, myBlob: any): Promise<void> {
    context.log("Blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    let data:boolean = myBlob.length>0;
    if (!data){
        context.log("No process data, side if")
        const readcsv = require ('readcsv');
        const file = '/path/to/file.csv';
        const filecloud = myBlob;
 
        readcsv (true, filecloud, (err, data) => {
         if (err) {
        context.log (err);
        return;
        }
        context.log (data);
});
    }else{
        context.log("Space of the file is valid")
        const readcsv = require ('readcsv');
        const file = '/path/to/file.csv';
        const filecloud = myBlob;
 
        readcsv (true, filecloud, (err, data) => {
         if (err) {
        context.log (err);
        return;
        }
        context.log (data);
    });
    }
};

export default blobTrigger;
