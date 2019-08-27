import { container } from '../ioc-init';

export class AppDependencyOfDependencyClass {
	field: 'dep of dep';

	constructor() {
		console.log('constructor AppDependencyOfDependencyClass');
	}
}

export class AppDependencyClass {
	name = 'bielik name 2';
	surname = 'bielik surname 2';
	private aaa = container.get(AppDependencyOfDependencyClass);

	constructor() {
		console.log('constructor AppDependencyClass');
	}
}
