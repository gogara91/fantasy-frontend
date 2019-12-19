class LocalStorageService {
    setItem(itemName, itemValue) {
        localStorage.setItem(itemName, itemValue);
    }

    clearAuthStorage()
    {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
    }

}

export default new LocalStorageService();