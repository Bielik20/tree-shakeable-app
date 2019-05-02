import { DummyClass, first, second } from 'tree-shakeable-lib/modules/core';
import { products, ProductsClass } from 'tree-shakeable-lib/modules/products';

first();
products();

class DerivedClass extends ProductsClass {
	print() {
		// tslint:disable-next-line:no-console
		console.log('from derived class ', this.surname);
	}
}
