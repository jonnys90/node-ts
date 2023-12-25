import Joi from "joi";

const validation = (
  schema: Joi.ObjectSchema<any>,
  userInput: object
): { [key: string]: any } | null => {
  const { error } = schema.validate(userInput, { abortEarly: false });
  if (!error) {
    //no errors
    return null;
  }
  let errorObj: { [key: string]: any } = {};
  const { details } = error;
  for (let item of details) {
    let key = item.path[item.path.length - 1];
    let { message } = item;
    errorObj[key] = message;
  }
  return errorObj;
};
export default validation;

/*
    details = [
        {
            path : ["email"],
            message = "error email"
        },
        {
            path : ["password"],
            message = "password error"
        }
    ]
    errorObj = {}
    item 1:
    key = "email"
    message = "error email"
    errorObj.email = message
    item 2:
    key = "password"
    message = "password error"
    errorObj.password = "password error"
    loop ends:
    errorObj = {
        email: "error email",
        password: "password error"
    }
*/
