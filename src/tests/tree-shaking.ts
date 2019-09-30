import { LibUnusedClass } from 'tree-shakeable-lib';
import { container } from '../ioc-init';

export function testTreeShaking(): void {
	console.log('### TREE SHAKING - should not include LibUnusedClass in bundle if commented out');

	container.get(LibUnusedClass);
}
