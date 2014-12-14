import Ember from 'ember';

export default Ember.Controller.extend({

  isFoobar: false,

  randomComputedProperty: function() {
    return this.get('media.isJumbo') && this.get('isFoobar');
  }.property('media.isJumbo', 'isFoobar'),

  actions: {
    toggle: function() {
      this.toggleProperty('isFoobar');
    }
  }

});
