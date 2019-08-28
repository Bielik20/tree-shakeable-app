import { LibDependencyClass, Container } from 'tree-shakeable-lib';

export class BaseConsumerClass {
	constructor(public ownDep: LibDependencyClass) {}
}

export class AppConsumerClass extends BaseConsumerClass {
	private date = Container.get(Date);
	private dependency = Container.get(LibDependencyClass);

	constructor() {
		super(Container.get(LibDependencyClass));
		console.log('constructor AppConsumerClass');
	}

	printName(): void {
		console.log(`${this.dependency.name} ${this.dependency.surname}`);
	}
}
