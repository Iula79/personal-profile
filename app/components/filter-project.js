import Ember from 'ember';

export default Ember.Component.extend({
    filter:null,
    filteredList:null,
    rows:2,
    actions: {
        autoComplete(){
            this.get('autoComplete')(this.get('filter'))
        },
        search() {
            this.get('search')(this.get('filter'))
        },
        choose(city){
            this.set('filter', city)
        }
    }

});
