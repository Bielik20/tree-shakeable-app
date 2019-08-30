import { container, LibUnusedClass } from 'tree-shakeable-lib';

export function testTreeShaking(): void {
	console.log('### TREE SHAKING - should not include LibUnusedClass in bundle if commented out');

	container.get(LibUnusedClass);
}
