import { container } from 'tree-shakeable-lib';

export class AppDependencyOfDependencyClass {
	field: 'dep of dep';

	constructor() {
		console.log('constructor AppDependencyOfDependencyClass');
	}
}

export class AppDependencyClass {
	private aaa = container.get(AppDependencyOfDependencyClass);
	name = 'bielik name 2';
	surname = 'bielik surname 2';

	constructor() {
		console.log('constructor AppDependencyClass');
	}
}
