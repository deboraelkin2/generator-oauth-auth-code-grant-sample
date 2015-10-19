var getHost = function(req) {
	return (req.hostname.indexOf('localhost') != -1) ? 'localhost:3000' : req.hostname;
};
// support running the webapp locally vs. in Apigee cloud
var getBasePath = function(req) {
	// console.log(req)
	return (req.hostname.indexOf('localhost') != -1) ? '' : '/oauth2/app';
};

// support running the webapp locally vs. in Apigee cloud
var getUrlScheme = function(req) {
	return (req.hostname.indexOf('localhost') != -1) ? 'http' : 'https';
};

exports.getHost = getHost;
exports.getBasePath = getBasePath;
exports.getUrlScheme = getUrlScheme;
