import { Inject } from 'typescript-ioc';

export class AppDependencyOfDependencyClass {
	field: 'dep of dep';

	constructor() {
		console.log('constructor AppDependencyOfDependencyClass');
	}
}

export class AppDependencyClass {
	@Inject date111: Date;
	name = 'bielik name 2';
	surname = 'bielik surname 2';

	constructor(@Inject private aaa: AppDependencyOfDependencyClass) {
		console.log('constructor AppDependencyClass');
	}
	// constructor(@Inject date2: Date) {}
}
