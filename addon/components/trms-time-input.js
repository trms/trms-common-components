import Ember from 'ember';
import layout from '../templates/components/trms-time-input';
import TimeUtils from '../utils/time-utils';

export default Ember.Component.extend({
  layout,

  defaultTime: '12:00:00 am',

  actions: {
    update(value) {
      let update = this.attrs.update;
      let defaultTime = this.get('defaultTime');
      if (update) {
        let time = TimeUtils.toTightyTime(value,defaultTime);
        update(time);
        this.$('input')[0].value = time;
      }
    }
  }
});
