import { container, LibDependencyClass } from 'tree-shakeable-lib';

export class BaseConsumerClass {
	constructor(public ownDep: LibDependencyClass) {}
}

export class AppConsumerClass extends BaseConsumerClass {
	private date = container.get(Date);
	private dependency = container.get(LibDependencyClass);

	constructor() {
		super(container.get(LibDependencyClass));
		console.log('constructor AppConsumerClass');
	}

	printName(): void {
		console.log(`${this.dependency.name} ${this.dependency.surname}`);
	}
}
