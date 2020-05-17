const AWS = require("aws-sdk");
const ses = new AWS.SES({
    region: 'us-west-2'
});

/**
 * @fileOverview Create an email template
 * */
const mainFunction =  async () => {
    const params =  require("./email-template.json");
    return await ses.createTemplate(params).promise();
}

mainFunction().then(() => {
    console.log('email sent successfully.');
}).catch((error)=>{
    console.log('Error in email send.');
    console.dir(error.message);
})