import { container, LibConsumerClass, LibDependencyClass, Scope } from 'tree-shakeable-lib';
import { AppDependencyClass } from '../core';
import { AppConsumerClass } from '../products';

export function testScope(): void {
	console.log('### SCOPE - should create tree AppDependencyClass');

	container.bind(AppDependencyClass).scope(Scope.Transient);
	container.bind(LibConsumerClass).to(AppConsumerClass);
	container.bind(LibDependencyClass).to(AppDependencyClass);

	container.get(LibConsumerClass);
	container.get(LibDependencyClass);
}
