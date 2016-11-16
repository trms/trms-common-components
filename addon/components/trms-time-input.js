import Ember from 'ember';
import layout from '../templates/components/trms-time-input';
import TimeUtils from '../utils/time-utils';

export default Ember.Component.extend({
  layout,
  
  actions: {
    update(value) {
      let update = this.attrs.update;
      if (update) {
        let parsed = TimeUtils.toTightyTime(value);
        this.$('input')[0].value = parsed;
        update(parsed);
      }
    }
  }
});
