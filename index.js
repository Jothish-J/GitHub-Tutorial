const pi = 3.14;
let experimental = false;

function helloUser(user) {
    console.log("Hello " + user);
}

function toogleExperimental() {
    experimental = !experimental;
}

function experimentalFeature() {
    if (experimental) console.log("DUde");
    else console.error("Experimental feature");
}
