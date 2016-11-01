import timer from './timer.js';

afterEach(() => {
  timer.stop();
  timer.reset();
});

it('exists', () => {
  expect(typeof timer).toBe('object');
});

it('starts', () => {
  timer.start();

  expect(timer.time()).toBe(0);
});

it('stops', () => {
  timer.start();
  timer.stop();

  expect(timer.time()).toBe(0);
});
