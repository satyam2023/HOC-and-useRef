import { useMemo } from "react";
import { Ivalue } from "../models/interface";



function handleSignup(details:Ivalue){

    const namestatus=handlename(details.name.current);
    const contactstatus=handlecontact(details.contact.current);
    const emailstatus=handleemail(details.email.current);
    const countrystatus=handlecountry(details.country.current);
    const passwordstatus=handlepassword(details.createPassword.current,details.confirmPassword.current);
  
    console.log("name Status::",namestatus);
    console.log("email status",emailstatus);
    console.log("contact status",contactstatus);
    console.log("country status",countrystatus);
    console.log("password status",passwordstatus);
    
}

function handlename(name: string) {
    let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name)){
        return false;
    }else{
        return true;
    }
}

function handlecontact(contact: string) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(contact);
}

function handleemail(email: string) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

function handlecountry(country: string) {
    if(country.length>4){
        return true;
    }
    else {
        return false;
    }
}

function handlepassword(pass: string, pass1: string) {
    if(pass1.length<8 || pass1.length<8){
        return false;
    }
    else {
        return true;
    }
}

export { handleSignup};