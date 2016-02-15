import Ember from 'ember';

export default Ember.Component.extend({
    isInvalid: true,
    validForm: function(){
        if (this.get('name') !== "" && this.get('email') !== "") {
            this.set('isInvalid',false);
        } else {
            this.set('isInvalid', true);
        }
    }.observes('name','email'),
    actions: {
        sendMail: function() {
            alert("hi");
        }
    }
});
