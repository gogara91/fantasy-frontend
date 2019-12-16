import Axios from 'axios';

const Http = Axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

class HttpService {
    
    get(url) {
        return Http.get(url);
    }

    post(url, data) {
        return Http.post(url, data);
    }

    put(url, data) {
        return Http.put(url,data);
    }

    patch(url, data) {
        return Http.patch(url, data);
    }

    delete(url) {
        return Http.delete(url);
    }

    Axios() {
        return Http;
    }
}

export default new HttpService();