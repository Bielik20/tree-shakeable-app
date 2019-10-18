import { printHello } from '@wikia/post-quecast';

document.addEventListener('DOMContentLoaded', () => {
	printHello();

	window.addEventListener(
		'message',
		(event) => {
			console.log(event);
			if (event.data === 'iframe message') {
				event.source.postMessage('father message to iframe', '*' as any);
			}
		},
		false,
	);

	const button = document.getElementById('post-message');

	button.addEventListener('click', () => {
		window.postMessage('father message', '*');
	});
});
