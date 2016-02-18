import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('proj');
  this.route('single',{path: 'proj/:single_id'});
});

export default Router;
