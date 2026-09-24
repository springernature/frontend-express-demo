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
	authorFeedbackTitle: 'Feedback for author(s)',
	editorFeedbackTitle: 'Feedback for editor',
	ratingTitle: 'How useful did you find this report?',
	items: [
		{
			reviewerName: 'Megan Haran',
			reviewDate: formatDate('Wed, 26 Aug 2020 08:20:45 GMT'),
			authorFeedbackText: 'I am not sure whether the Kerr nonlinearity does not enhanced unwanted non RWA features and destroys the effect. But this is just a side remark. It is a nice and well-written piece of scientific work.',
			editorFeedbackText: 'Although this paper looks interesting, I have raised some points that the author needs to address before it can be accepted for publication.',
		}
	]
};
