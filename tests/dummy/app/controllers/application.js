import Ember from 'ember';

export default Ember.Controller.extend({
  value: '12:00:00 am',
  value2: '1:00:00 pm',
  actions: {
    handleUpdate(value) {
      this.set('value', value);
    }
  }
});
