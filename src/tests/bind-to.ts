import { container, LibConsumerClass, LibDependencyClass } from 'tree-shakeable-lib';
import { AppDependencyClass } from '../core';
import { AppConsumerClass } from '../products';

export function testBindTo(): void {
	console.log('### BIND TO - should create AppConsumerClass and AppDependencyClass');

	container.bind(LibConsumerClass).to(AppConsumerClass);
	container.bind(LibDependencyClass).to(AppDependencyClass);

	const instance = container.get(LibConsumerClass);
	instance.printName();
}
