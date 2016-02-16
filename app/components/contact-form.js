import Ember from 'ember';

export default Ember.Component.extend({
  isInvalid: function() {
    if (!this.get('name')  && !this.get('email')) {
      return true;
    } else {
      return false;
    }
  }.property('name', 'email'),
  actions: {
    sendMail: function() {
      if (this.get("isInvalid")) {
      } else {
        alert("hi");
      }
    }
  }
});
