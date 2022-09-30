export const isEmailValid = (email:any) => {
    const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //REGEX
    return re.test(email);
};
