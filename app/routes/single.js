import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
   return this.store.findRecord('project', params.single_id);
 },
 setupController(controller, model) {
     controller.set("project", model);
 }
});
