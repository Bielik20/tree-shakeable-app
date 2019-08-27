import { LibConsumerClass, LibDependencyClass } from 'tree-shakeable-lib';
import { container } from '../ioc-init';

export class BaseConsumerClass {
	constructor(public ownDep: LibDependencyClass) {}
}

export class AppConsumerClass extends BaseConsumerClass implements LibConsumerClass {
	private date = container.get(Date);
	dependency = container.get(LibDependencyClass);

	constructor() {
		super(container.get(LibDependencyClass));
		console.log('constructor AppConsumerClass');
	}

	printName(): void {
		console.log(`${this.dependency.name} ${this.dependency.surname}`);
	}
}
