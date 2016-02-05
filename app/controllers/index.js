import Ember from 'ember';

export default Ember.Controller.extend({
  filteredlist: null,
  actions: {
    autocomplete(param) {
        if (param !== ""){
            this.store.query('project',{technologies:param}).then((result) => this.set('filteredList', result));
        }
        else {
            this.set('filteredlist').clear();
        }
      },

      search(param) {
          if (param !== ""){
              this.store.query('project',{technologies:param}).then((result) => this.set('model',result));
          }
          else {
              this.set('model').clear();
          }
      }
  },
});
