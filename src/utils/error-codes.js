const ClientErrorCodes = Object.freeze({
        BAD_REQUEST : 400,
        UNAUTHORIZED : 401,
        NPT_FOUND : 404
});

const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR : 500,
    NOT_IMPLEMENTED : 501
});

const SuccessCodes = Object.freeze({
    OK : 200,
    CREATED : 201
});

module.exports = {
    ClientErrorCodes,
    ServerErrors,
    SuccessCodes
}