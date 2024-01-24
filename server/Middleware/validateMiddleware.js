

                //these schema is validator schema
const validate = (schema) => async(req,res,next) => {
try {
                                        //this req.body is belongs to data geeting from cilent
    const parseBody = await schema.parseAsync(req.body);
        //this function validate data from server and client data is right or not
    //sending parseBody (validate data) into req.body
    req.body = parseBody;
    next();
} catch (err) {
//user defined error
    const status = 422;
    const message = "Fill the input properly";
    //we get errors array so we fecth first data to fetch error
    const extraDetails =err.errors[0].message
    
    const error = {
        status,
        message,
        extraDetails
    }

    next(error);
}
}

module.exports = validate;
