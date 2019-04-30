import { DummyClass, first, second } from 'tree-shakeable-lib';

first();
// console.log(['a', 'b'].find((x) => x === 'a'));
async function test() {
	await Promise.resolve(5);
	console.log('done');
}

test();
