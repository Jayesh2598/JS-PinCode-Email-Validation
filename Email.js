let emailRegex = RegExp('[a-zA-Z][a-zA-Z0-9_+-]{2,}([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9]+[.][a-zA-Z]{2,}([.][a-zA-Z]{2,})?$');

function validateEmail(email) {
    if (emailRegex.test(email))
        console.log(`${email} is valid.`);
    else throw `${email} is invalid.`;
}

// UC 1
try {
    validateEmail('abc');
}
catch (e) {
    console.error(e);
}

// UC 2
try {
    validateEmail('abc@bridgelabz');
}
catch (e) {
    console.error(e);
}

// UC 3
try {
    validateEmail('abc@bridgelabz.co');
}
catch (e) {
    console.error(e);
}

// UC 4
try {
    validateEmail('abc.xyz@bridgelabz.co.in');
}
catch (e) {
    console.error(e);
}

// UC 5
try {
    validateEmail('abc-100@abc.net');
}
catch (e) {
    console.error(e);
}

try {
    validateEmail('abc@gmail.com.1a');
}
catch (e) {
    console.error(e);
}