import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trms-time-input', 'Integration | Component | trms time input', {
  integration: true
});

test('Takes a value and invokes action on change', function(assert) {
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

test('Accepts an inputClass property for inner input element', function(assert) {
  this.set('value', '1:00:00 am');
  this.set('inputClass', 'hot-sauce');
  this.on('update', function(value) {
    assert.equal(value, '2:00:00 pm');
  });

  this.render(hbs`{{trms-time-input value=value update=(action 'update') inputClass=inputClass}}`);

  assert.ok(this.$('input').hasClass('hot-sauce'));
});
