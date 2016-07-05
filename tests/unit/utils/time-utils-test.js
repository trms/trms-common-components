import timecodeUtils from 'dummy/utils/time-utils';
import { module, test } from 'qunit';

module('Unit | Utility | timecode utils');

test('Only specifying hour segment results in correct time', function(assert) {
  let result = timecodeUtils.toTightyTime('2');
  assert.equal(result, '2:00:00 am');

  result = timecodeUtils.toTightyTime('14');
  assert.equal(result, '2:00:00 pm');
});

test('Specifying hour and minute segments results in correct time', function(assert) {
  let result = timecodeUtils.toTightyTime('2:15');
  assert.equal(result, '2:15:00 am');

  result = timecodeUtils.toTightyTime('2.30');
  assert.equal(result, '2:30:00 am');

  result = timecodeUtils.toTightyTime('2.6');
  assert.equal(result, '2:06:00 am');
});

test('Specifying hour and minute and second segment results in correct time', function(assert) {
  let result = timecodeUtils.toTightyTime('2:15:10');
  assert.equal(result, '2:15:10 am');

  result = timecodeUtils.toTightyTime('2.30.20');
  assert.equal(result, '2:30:20 am');

  result = timecodeUtils.toTightyTime('2.6.5');
  assert.equal(result, '2:06:05 am');
});

test('Using + forces time to PM', function(assert) {
  let result = timecodeUtils.toTightyTime('2+');
  assert.equal(result, '2:00:00 pm');

  result = timecodeUtils.toTightyTime('3 +');
  assert.equal(result, '3:00:00 pm');

  result = timecodeUtils.toTightyTime('2.20+');
  assert.equal(result, '2:20:00 pm');

  result = timecodeUtils.toTightyTime('2.20.11+');
  assert.equal(result, '2:20:11 pm');
});

test('Using p forces time to PM', function(assert) {
  let result = timecodeUtils.toTightyTime('2p');
  assert.equal(result, '2:00:00 pm');

  result = timecodeUtils.toTightyTime('3 p');
  assert.equal(result, '3:00:00 pm');

  result = timecodeUtils.toTightyTime('2.20P');
  assert.equal(result, '2:20:00 pm');

  result = timecodeUtils.toTightyTime('2.20.11 P');
  assert.equal(result, '2:20:11 pm');
});

test('Using pm forces time to PM', function(assert) {
  let result = timecodeUtils.toTightyTime('2pm');
  assert.equal(result, '2:00:00 pm');

  result = timecodeUtils.toTightyTime('3 pm');
  assert.equal(result, '3:00:00 pm');

  result = timecodeUtils.toTightyTime('2.20PM');
  assert.equal(result, '2:20:00 pm');

  result = timecodeUtils.toTightyTime('2.20.11 PM');
  assert.equal(result, '2:20:11 pm');
});

test('Using +, p, or PM with hour 12 forces time to PM', function(assert) {
  let result = timecodeUtils.toTightyTime('12+');
  assert.equal(result, '12:00:00 pm');

  result = timecodeUtils.toTightyTime('12p');
  assert.equal(result, '12:00:00 pm');

  result = timecodeUtils.toTightyTime('12pm');
  assert.equal(result, '12:00:00 pm');
});

test('Passing garbage in defaults to 12am', function(assert) {
  let result = timecodeUtils.toTightyTime('aklfjd');
  assert.equal(result, '12:00:00 am');
});

test('Overflowing segments results in valid times', function(assert) {
  let result = timecodeUtils.toTightyTime('36');
  assert.equal(result, '12:00:00 pm');

  result = timecodeUtils.toTightyTime('36.90');
  assert.equal(result, '1:30:00 pm');

  result = timecodeUtils.toTightyTime('36.90.90');
  assert.equal(result, '1:31:30 pm');

});
