import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    technologies: DS.attr(),
    image: DS.attr(),
    link: DS.attr()
});
