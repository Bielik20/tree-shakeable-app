import { Communicator, Coordinator } from '@wikia/post-quecast';

document.addEventListener('DOMContentLoaded', () => {
	// tslint:disable-next-line:no-unused-expression
	new Coordinator();
	const communicator = new Communicator('ae', 'tree shakeable app');

	communicator.actions$.subscribe((action) => console.log('tree shakeable app', action));

	document.getElementById('post-message').addEventListener('click', () => {
		communicator.emit({ type: 'father message' });
	});

	document.getElementById('listen-actions').addEventListener('click', () => {
		communicator.actions$.subscribe((action) => console.log('tree shakeable app (listen)', action));
	});

	document.getElementById('close-1').addEventListener('click', () => {
		const iframe = document.getElementById('iframe-1');
		iframe.parentNode.removeChild(iframe);
	});

	document.getElementById('close-2').addEventListener('click', () => {
		const iframe = document.getElementById('iframe-2');
		iframe.parentNode.removeChild(iframe);
	});

	document.getElementById('create-communicator').addEventListener('click', () => {
		const communicator2 = new Communicator('ae', 'tree shakeable app - 2');
		communicator2.actions$.subscribe((action) => console.log('tree shakeable app - 2', action));
	});
});
