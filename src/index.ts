import { Communicator, Coordinator } from '@wikia/post-quecast';

document.addEventListener('DOMContentLoaded', () => {
	// tslint:disable-next-line:no-unused-expression
	new Coordinator();
	const communicator = new Communicator('ae', 'tree shakeable app');
	const button = document.getElementById('post-message');

	communicator.actions.subscribe((action) => console.log('tree shakeable app', action));

	button.addEventListener('click', () => {
		communicator.emit({ type: 'father message' });
	});
});
