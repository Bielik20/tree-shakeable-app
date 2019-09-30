import { LibConsumerClass } from 'tree-shakeable-lib';
import { container } from '../ioc-init';

export function testDefault(): void {
	console.log('### DEFAULT - should create instances from lib');

	const instance = container.get(LibConsumerClass);
	instance.printName();
}
