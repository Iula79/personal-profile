import Ember from 'ember';

export default Ember.Component.extend({
    isImageShowing: false,
    actions: {
        imageshow(){
            this.set('isImageShowing', true);
        }
    }
});
