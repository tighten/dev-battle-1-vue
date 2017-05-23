export default {
    methods: {
        get(route) {
            return axios({
                method:'get',
                url: 'http://battle-api.tighten.co/api/' + route,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + window.clash.auth_token,
                }
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);

                if (error.response) {
                    alert(response.data);
                }
            });
        },
        post(route, payload) {
            return axios({
                method:'post',
                data: payload,
                url: 'http://battle-api.tighten.co/api/' + route,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + window.clash.auth_token,
                }
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);

                if (error.response) {
                    alert(response.data);
                }
            });
        },
    }
}
