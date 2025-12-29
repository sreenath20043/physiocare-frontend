import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";

//1 register
export const registerUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

//2 login
export const loginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}


//3 gooogle Login user
export const GoogleloginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/google-login`,reqBody,{})
}

//4 doctor register
export const doctorRegisterUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/doctor-register`,reqBody,{'Content-Type':'multipart/form-data'})
}

//5 get all doctors
export const getAllDoctorsAPI = async()=>{
    return await commonAPI('GET',`${serverURL}/api/doctors`,{},)
}