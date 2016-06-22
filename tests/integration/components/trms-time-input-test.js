import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trms-time-input', 'Integration | Component | trms time input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('value', '1:00:00 am');
  this.on('update', function(value) {
    assert.equal(value, '2:00:00 pm');
  });

  this.render(hbs`{{trms-time-input value=value update=(action 'update')}}`);

  let initialValue = this.$('input').val();
  assert.equal(initialValue, '1:00:00 am');
  this.$('input').val('2+');
  this.$('input').change();
});
