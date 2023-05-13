import { AzureFunction, Context } from "@azure/functions"

const blobTrigger: AzureFunction = async function (context: Context, myBlob: any): Promise<void> {
    context.log("Blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    let data:boolean = myBlob.length;
    if (!data){
        context.log("procesando archivo")
    }else{
        context.log("Space of the file no valid")
    }

};

export default blobTrigger;
