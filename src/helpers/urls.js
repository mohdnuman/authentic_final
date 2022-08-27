const API_ROOT='http://127.0.0.1:8000/api/v1';

export  const APIUrls={
    login:()=>`${API_ROOT}/users/create-session`,
    signup:()=>`${API_ROOT}/users/create`,
    editProfile:()=>`${API_ROOT}/users/edit`,
    userProfile:(userId)=>`${API_ROOT}/users/${userId}`
}