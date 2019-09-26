import { SCOPES } from '@wikia/dependency-injection';
import { container, LibConsumerClass, LibDependencyClass } from 'tree-shakeable-lib';
import { AppDependencyClass } from '../core';
import { AppConsumerClass } from '../products';

export function testScope(): void {
	console.log('### SCOPE - should create tree AppDependencyClass');

	container.bind(AppDependencyClass).scope(SCOPES.Transient);
	container.bind(LibConsumerClass).to(AppConsumerClass as any);
	container.bind(LibDependencyClass).to(AppDependencyClass as any);

	container.get(LibConsumerClass);
	container.get(LibDependencyClass);
}
