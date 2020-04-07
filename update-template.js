const AWS = require("aws-sdk");
const ses = new AWS.SES({
    region: 'us-west-2'
});

/**
 * @fileOverview Update an email template
 * */
const mainFunction =  async () => {
    const params =  require("./email-template.json");
    return await ses.updateTemplate(params).promise();
}

mainFunction().then(() => {
    console.log('template updated successfully.');
}, (ex) => {
    console.log('Error in template updation.');
    console.dir(ex.message);
});