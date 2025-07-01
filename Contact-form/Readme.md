## Requirements
The form should contain the following elements:
1.Name field.

2.Email field.

3.Message field. Since the message can be long, a <textarea> will be more suitable.

4.Submit button

Contains the text "Send".

Clicking on the submit button submits the form.
The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
There is no need to do any client-side validation on the fields. Validation will be done on the server side.

## Submission API
Upon submission, POST the form data to https://questions.greatfrontend.com/api/questions/contact-form 
with the following fields in the request body: name, email, message.

If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!
