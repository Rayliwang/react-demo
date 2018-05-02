import fetch from 'isomorphic-fetch';

const apiHost = process.env.REACT_APP_API_HOST;

class APIClient {

  config(method) {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }
  };
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then(resp => {
        throw resp.error;
      });
    }
  };

  getMoldList() {
    const url = `${apiHost}/assessments/models?user_id=40000144`;
    return fetch(url, this.config('get'))
      .then(this.checkStatus);
  }

}

export default new APIClient();
