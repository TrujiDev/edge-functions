exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: '¡Hola desde Netlify Functions con Node.js!',
		}),
	};
};
