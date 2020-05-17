const AWS = require("aws-sdk");
const ses = new AWS.SES({
    region: 'us-west-2'
});

/**
 * @fileOverview Update an email template
 * */
const mainFunction =  async () => {
    const params =  require("./email-template.json");
    return ses.updateTemplate(params).promise();
    console.log("I am here now.")
}

mainFunction().then(() => {
    console.log('email sent successfully.');
}).catch((error)=>{
    console.log('Error in email send.');
    console.dir(error.message);
})