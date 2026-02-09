import { expect, test } from '@jest/globals';
import { run } from './run';

test('it can run', () => {
    expect(run()).toEqual(7);
});
