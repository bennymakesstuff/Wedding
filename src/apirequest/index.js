import axios from 'axios';


const api = {

  //server: 'http://192.168.1.220:8001/',
  server: 'http://localhost:8001/',
  //server: 'https://dev-api.haveihadthis.beer/',

  get: function(url){
    var token = localStorage.getItem('user-token');
    if(token!== null){
      axios.defaults.headers.common['Authorization'] = token;
    }
    else{
      localStorage.removeItem('permissions');
    }

    const returnData = new Promise((resolve, reject) => {
      const token = localStorage.getItem('user-token');
      axios({url: this.server+url, method: 'GET'})
        .then(resp => {
            console.log(resp);
            const requestResponseFromServer = resp.data.response;
            if(requestResponseFromServer==true){
              //console.log(resp.data.payload);
              resolve(resp.data.payload);
            }
            else{
            //  reject(resp.data.payload)
              reject('Thing happened');
            }
        })
      .catch(err => {
        reject(err);
      })
    });

    return returnData;
  },


  post: function(url,payload){
    const returnData = new Promise((resolve, reject) => {
      console.log(payload);
      axios({url: this.server+url, data: payload, method: 'POST'})
        .then(resp => {
            if(resp.data.response==true){
              resolve(resp.data.payload);
            }
            else{
              reject(resp.data.payload)
            }
        })
      .catch(err => {
        reject(err);
      })
    });

    return returnData;
  }

}


export default api;
