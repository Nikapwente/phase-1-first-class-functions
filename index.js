function receivesAFunction (callBack) {
    return callBack();
}

function returnsANamedFunction() {
    return function callMe() {}
}

function returnsAnAnonymousFunction() {
    return function () {}
}