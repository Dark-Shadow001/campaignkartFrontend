
import axios from "axios"

interface Iform {
    name:string,
    email:string,
    phone?:string,
    message:string
}

const AddMessage = async(data:Iform)=> {
 try {
 
   const response = await axios.post("/api/contact",data)

   if(response.status == 200){
   return {
    success:true,
    data:response.data
   }
   }else{
    return {success:false, message:"data submission failed"}
   }
 } catch (error:any) {
    return {success:false, message:error.message}
 }
}

export default AddMessage


 