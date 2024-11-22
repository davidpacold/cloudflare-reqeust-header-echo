export default {
	async fetch(request, env, ctx) {
	  let requestPropertiesAndHeaders = {
		requestHeaders: {},
	  };
  
	  if (request.cf) {
		Object.keys(request.cf)
		  .sort()
		  .forEach((key) => {
			requestPropertiesAndHeaders[key] = request.cf[key];
		  });
	  }
  
	  let headers = new Headers(request.headers);
  
	  for (const [k, v] of headers) {
		requestPropertiesAndHeaders.requestHeaders[k] = v;
	  }
  
	  headers.set(
		'all-request-headers',
		JSON.stringify(requestPropertiesAndHeaders.requestHeaders)
	  );
  
	  console.log(headers.get('all-request-headers'));
  
	  return new Response(
		`Echoing special request.cf properties:${'\n\n'}${JSON.stringify(
		  requestPropertiesAndHeaders,
		  null,
		  2
		)}`,
		{
		  headers: headers,
		  status: 200,
		}
	  );
	},
  };
  