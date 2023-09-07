const cookieName = "myCookie";
const cookieValue = "myValue";
const cookieExpires = new Date();
cookieExpires.setMonth(cookieExpires.getMonth() + 1);
document.cookie = `${cookieName}=${cookieValue}; SameSite=None; Secure`;