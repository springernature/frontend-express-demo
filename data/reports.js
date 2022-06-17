import {format, isValid} from 'date-fns';

const formatDate = dateString => {
	const utcDate = new Date(dateString);

	if (!isValid(utcDate)) {
		return;
	}

	return format(utcDate, 'dd-MMM-yyyy');
};

export const reports = {
	title: 'Reports',
	reviewerName: 'Firstname Lastname',
	reviewDate: formatDate('Wed, 26 Aug 2020 08:20:45 GMT'),
	authorFeedbackText: 'I am not sure whether the Kerr nonlinearity does not enhanced unwanted non RWA features and destroys the effect. But this is just a side remark. It is a nice and well-written piece of scientific work.',
	editorFeedbackText: 'Although this paper looks interesting, I have raised some points that the author needs to address before it can be accepted for publication.',

	controlsListItems: [
		{
			id: 'c-report__controls-input-option-1',
			value: '1',
			labelText: 'Not useful'
		},
		{
			id: 'c-report__controls-input-option-2',
			value: '2',
			labelText: 'Level 2 useful'
		},
		{
			id: 'c-report__controls-input-option-3',
			value: '3',
			labelText: 'Level 3 useful'
		},
		{
			id: 'c-report__controls-input-option-4',
			value: '4',
			labelText: 'Level 4 useful'
		},
		{
			id: 'c-report__controls-input-option-5',
			value: '5',
			labelText: 'Level 5 useful'
		},
	],

	rating: null
};
