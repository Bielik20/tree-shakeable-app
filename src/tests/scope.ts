import { SCOPES } from '@wikia/dependency-injection';
import { LibConsumerClass, LibDependencyClass } from 'tree-shakeable-lib';
import { AppDependencyClass } from '../core';
import { container } from '../ioc-init';
import { AppConsumerClass } from '../products';

export function testScope(): void {
	console.log('### SCOPE - should create tree AppDependencyClass');

	container.bind(AppDependencyClass).scope(SCOPES.Transient);
	container.bind(LibConsumerClass).to(AppConsumerClass);
	container
		.bind(LibDependencyClass)
		.to(AppDependencyClass as any)
		.scope(SCOPES.Transient);

	container.get(LibConsumerClass);
	container.get(LibDependencyClass);
}
