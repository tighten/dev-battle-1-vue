const base_url = 'http://battle-api.tighten.co/api/';

export default {
    methods: {
        get(route) {
            return axios.get(base_url + route)
                .then((response) => {
                    return response.data;
                });
        },
        post(route, payload) {
            return axios.post(base_url + route, payload)
                .then((response) => {
                    return response.data;
                });
        },
    }
}
