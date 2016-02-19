import Ember from 'ember';

export default Ember.Component.extend({
    items: [{name: 'a'}, {name: 'b'}, {name: 'c'}],
    organizedItems: function() {
        return this.get('items').reduce(function(arr, item, index) {
            if(index % 2 === 0 ) {
                arr[index / 2] = [item];
            } else {
                arr[Math.floor(index / 2)][1] = item;
            }

            return arr;
        }, []);

        // [[{name: 'a'}, {name: 'b'}], [{name: 'c'}]]
    }.property('items')
});
