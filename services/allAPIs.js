
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

//6 get doctor by ID
export const getDoctorByIdAPI = async(id)=>{
    return await commonAPI('GET',`${serverURL}/api/doctor/${id}`,{},)
}

//7 get doctor profile 
export const getDoctorProfileAPI = async()=>{
    const token = JSON.parse(sessionStorage.getItem('token'))
    const reqHeader = {
        'Authorization': `Bearer ${token}`
    }
    return await commonAPI('GET',`${serverURL}/api/doctor/profile`,{},reqHeader)
}

//8 doctorbooking
export const doctorBookingAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/doctor-booking`,reqBody,reqHeader)
}

//9 get all booking
export const getAllBookingAPI = async (reqHeader) => {
  return await commonAPI( "GET",`${serverURL}/api/doctorbooking`,{},reqHeader)
};

//9.1 get all bookings for admin
export const getAllBookingsForAdminAPI = async (reqHeader) => {
  return await commonAPI("GET", `${serverURL}/api/admin/all-bookings`, {}, reqHeader)
};

//10 cancel booking
export const cancelBookingAPI = async(bookingId)=>{
    return await commonAPI('DELETE',`${serverURL}/api/cancel-booking/${bookingId}`,{},{})
}

//11 get all users 
export const getAllUsersAPI = async () => {
    return await commonAPI('GET', `${serverURL}/api/users`, {}, {})
}

//12 update admin (patients)
export const updateAdminAPI = async (reqBody,reqHeader) => {
    return await commonAPI('PUT', `${serverURL}/api/admin/updateAdmin`,reqBody,reqHeader)
}

//13 Get Doctor Bookings
export const getDoctorBookingsAPI = async (token) => {
  return await commonAPI("GET",`${serverURL}/api/doctor-bookings`, "",{Authorization: `Bearer ${token}`});
};

//1 update admin (patients)
export const updateUserAPI = async (reqBody,reqHeader) => {
    return await commonAPI('PUT', `${serverURL}/api/user/updateUser`,reqBody,reqHeader)
}
