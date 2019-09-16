var waitingApp = new Vue({
el: '#patientWaitingApp',
data: {
  random_user: {
    name: {
      first: '',
      last: ''
    },

      dob: {
        date: '',
        age: ''
        },

        location: {
          timezone: {
            description: ''
          }
    },
    picture: {
      large: '',
      medium: '',
      thumbnail: ''
      }
  }
  },
methods: {
  fetchPerson() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {waitingApp.random_user=json.results[0]});
  }
},
created() {
  this.fetchPerson();
}
});
