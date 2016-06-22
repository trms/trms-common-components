import Ember from 'ember';

export default Ember.Controller.extend({
  value: '12:00:00 am',
  actions: {
    handleUpdate(value) {
      this.set('value', value);
    }
  }
});