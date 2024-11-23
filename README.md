When this is deployed you get a Cloudflare Worker that will handle a given url and echo back to the user whatever headers are added by Cloudflare to the request. 

In this project there is also a Github action to deploy the worker automatically when code is updated in the main branch. This will take checked in code updates and deploy it automatically to Cloudflare. 

You need to set 2 Github enviromnet secrets for this to work:

1. "CLOUDFLARE_ACCOUNT_ID"
2. "CLOUDFLARE_API_TOKEN"

The Account ID is your Cloudflare Account ID that you want to deploy workers to, and the API token is one that has the permissins to edit workers in that account / zone. 
