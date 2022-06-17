export const reportForm = () => console.log('The report-form component ran on the page');

const form = document.querySelector('[data-form-type="reports"]');
const submitType = form.dataset.submitType;
const submitButtons = Array.prototype.slice.call(document.querySelectorAll('[data-button-type="submit"]'));
const reports = Array.prototype.slice.call(document.querySelectorAll('[data-fieldset-type="report"]'));
const reportRatings = Array.prototype.slice.call(document.querySelectorAll('[data-report-rating]'));

if (submitType === 'change'){
    // Hide submit
    submitButtons.forEach(function(submitButton) {
        submitButton.classList.add('is-hidden');
    });

    // Submit on change
    reports.forEach(function(report) {
        report.addEventListener('change', function() {
            report.form.submit();
        });
    });

    // Make checkbox selection persistent
    reportRatings.forEach(function(reportRating) {
        const inputs = Array.prototype.slice.call(reportRating.querySelectorAll('[data-input-type="radio"]'));

        inputs.forEach(function(input) {
            if(input.value === reportRating.dataset.reportRating) {
                input.checked = true;
            }
        });
    });
}

