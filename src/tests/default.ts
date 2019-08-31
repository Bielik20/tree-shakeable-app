import { container, LibConsumerClass } from 'tree-shakeable-lib';

export function testDefault(): void {
	console.log('### DEFAULT - should create instances from lib');

	const instance = container.get(LibConsumerClass);
	instance.printName();
}
