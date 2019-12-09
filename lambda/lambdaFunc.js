const axios = require('axios')


exports.handler = async (event) => {
    const eventStringified = JSON.stringify(event)
    try {
        const options = {
            text: "Message from slack bot!!",
        }
        const foo = await axios.post('https://hooks.slack.com/services/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', eventStringified)
        console.log("foo ", JSON.stringify(foo))
        return foo
    } catch(err) {

        console.log("error is ", err)
        return err
    }


};
