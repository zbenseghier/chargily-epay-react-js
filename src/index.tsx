import axios from 'axios';

interface Intinvoice  {
  amount : number,
  invoiceNumber : number,
  client : string,
  discount : number,
  mode : "CIB" | "EDAHABIA",
  webhookUrl : string,
  backUrl : string,
  // appKey : string
}

export const create_payement = async(invoice: Intinvoice)=>{
  // adding some validation here 
  const appKey = process.env.CHARGILY_APP_KEY ? process.env.CHARGILY_APP_KEY : " "
  const config = {headers : {Accept: "application/json",  "X-Authorization": appKey},  timeout: 1000,}
  try {
    const {data} = await axios.post("http://epay.chargily.com.dz/api/invoice", invoice, config)
    const {checkout_url} = data
    // Redirect
    // window.location = checkout_url
  } catch (error) {
    console.log(error)
  }
}
