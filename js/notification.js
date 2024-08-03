const startDate = new Date('8/2/2024  9:00:00');
const endDate = new Date('8/2/2024  10:00:00');
console.log(startDate);
const difference = (endDate - startDate) / (1000 * 60);
console.log(difference);
// const whenTodowasCreated = Math.floor(Date.now() / (1000 * 60));
// const startDatex = new Date('8/2/2024') / (1000 * 60);
// console.log(difference);
// console.log(whenTodowasCreated - startDatex);
// const difx = whenTodowasCreated - startDatex;
function notifyMe() {
	if (!('Notification' in window)) {
		// Check if the browser supports notifications
		alert('This browser does not support desktop notification');
	} else if (Notification.permission === 'granted') {
		// Check whether notification permissions have already been granted;
		const options = {
			body: 'You have 30 minutes before a deadline',
		};

		const currentTime = new Date();
		const timeDifferenceInMinutes = (endDate - currentTime) / (1000 * 60);

		if (timeDifferenceInMinutes == 30 && timeDifferenceInMinutes > 0) {
			const notification = new Notification(
				'Trackam Todo Notification!',
				options
			);
		}
		// …
	} else if (Notification.permission !== 'denied') {
		// We need to ask the user for permission
		Notification.requestPermission().then((permission) => {
			// If the user accepts, let's create a notification
			if (permission === 'granted') {
				const options = {
					body: 'You will receive a notification 30 minutes before the deadline',
				};

				const currentTime = new Date();
				const timeDifferenceInMinutes = (endDate - currentTime) / (1000 * 60);

				if (timeDifferenceInMinutes == 30 && timeDifferenceInMinutes > 0) {
					const notification = new Notification(
						'Trackam Todo Notification!',
						options
					);
				}

				// …
			}
		});
	}
}

// Check every minute to see if it's time to notify
setInterval(notifyMe, 60 * 1000);
console.log(setInterval(notifyMe, 60 * 1000));
