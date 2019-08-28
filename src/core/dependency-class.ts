import { Container } from 'tree-shakeable-lib';

export class AppDependencyOfDependencyClass {
	field: 'dep of dep';

	constructor() {
		console.log('constructor AppDependencyOfDependencyClass');
	}
}

export class AppDependencyClass {
	private aaa = Container.get(AppDependencyOfDependencyClass);
	name = 'bielik name 2';
	surname = 'bielik surname 2';

	constructor() {
		console.log('constructor AppDependencyClass');
	}
}
