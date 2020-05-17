const AWS = require("aws-sdk");
const ses = new AWS.SES({
    region: 'us-west-2'
});

/**
 * @fileOverview Bulk Email Sending
 * */

const mainFunction =  async () => {
    const templateData = {
        name: 'Soni Pandey',
        email: 'sonipandey.71@gmail.com',
        phone: '+919999999999'
    }
    const params = {
        Destinations: [/* required */
            //replace from mapped.json
            {
                Destination: {
                    ToAddresses: [
                        "sonipandey.71@gmail.com",
                        "abc@xyz.com"
                    ],
                    CcAddresses: [
                        'sonipandey.71@gmail.com'
                    ]
                },
                ReplacementTemplateData: JSON.stringify(templateData)
            },
            /* more items */
        ],
        Source: 'Notifications <notifications@thepandeysoni.com>', /* required */
        Template: 'EmailTemplate', /* required */
        ConfigurationSetName: 'ConfigSet',
        DefaultTemplateData: "{ \"name\":\"unknown\", \"email\":\"unknown\", \"phone\":\"unknown\"  }"
    };
    console.log(JSON.stringify(params))
    await ses.sendBulkTemplatedEmail(params).promise();
}

mainFunction().then(() => {
    console.log('Here I am then.');
}).catch((error)=>{
    console.log('Error in email send.');
    console.dir(error.message);
})
