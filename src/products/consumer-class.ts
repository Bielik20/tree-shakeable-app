import { LibDependencyClass } from 'tree-shakeable-lib';
import { Inject } from 'typescript-ioc';

export class BaseConsumerClass {
	constructor(public ownDep: LibDependencyClass) {}
}

export class AppConsumerClass extends BaseConsumerClass {
	constructor(@Inject private dependency: LibDependencyClass, @Inject private date: Date) {
		super(dependency);
		console.log('constructor AppConsumerClass');
	}

	printName(): void {
		console.log(`${this.dependency.name} ${this.dependency.surname}`);
	}
}
