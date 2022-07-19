export const saveLoginData = (data) => {
    localStorage.setItem('userData', data);
}

export const getLoginData = () => {
    return localStorage.getItem('userData');
}

export const logout = () => {
    localStorage.removeItem('userData');
    window.location.reload();
}

export const isLoggedIn = () => {
    if (getLoginData()) return true;
    return false;
}

export const getUsername = () => {
    return getLoginData().username;
}

export const isAdmin = () => {
    return getLoginData().isAdmin;
}

export const getAccessToken = () => {
    return getLoginData().accessToken;
}

export const getUserId = () => {
    return getLoginData()._id;
}