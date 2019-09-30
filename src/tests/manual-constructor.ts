import { LibConsumerClass } from 'tree-shakeable-lib';
import { container } from '../ioc-init';

export function testManualConstructor(): void {
	console.log('### MANUAL CONSTRUCTOR - should not inject when provided value');

	const instance = container.get(LibConsumerClass);
	const instanceManual = new LibConsumerClass({
		name: 'manual name',
		surname: 'manual surname',
	} as any);

	instance.printName();
	instanceManual.printName();
}
