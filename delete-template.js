const AWS = require("aws-sdk");
const ses = new AWS.SES({
    region: 'us-west-2'
});

/**
 * @fileOverview Update an email template
 * */
const mainFunction =  async () => {
    return await ses.deleteTemplate({"TemplateName": "EmailTemplate"}).promise();
}

mainFunction().then(() => {
    console.log('template deleted successfully.');
}, (ex) => {
    console.log('Error in template deletion.');
    console.dir(ex.message);
});