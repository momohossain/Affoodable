First start the backend by running the following command in the 'Affoodable/backend/nodejs' directory: 'node server.js'. The backend must be running in order for requests to work.

From there, you can make a request using axios in this format (Variables with \_underscores\_ need to be replaced with different things depending on what you are trying to do):

axios.\_method\_("http://localhost:8000/_field_/_query_", \_optional\_input\_)

Here is what the different variables correspond to:

\_method\_ : A standard HTTP request type, ie get or post
\_field\_ : One of our database model, ie customers, restaurants, accounts, or deals
\_query\_ : A route for one of the fields. Available routes can be found in the 'Affoodable/backend/nodjs/routes' directory
\_optional\_input\_ : A json style object for setting properties of an object, only used in post requests

Examples:

Retrieve active deals for a restaurant with the placeId 12345.
axios.get("http://localhost:8000/deals/restaurant/12345")

Retrieve all deals (both active and inactive) for a restaurant with the placeId 12345.
axios.get("http://localhost:8000/deals/restaurant/12345/all")

Create a new restaurant with an accountId of 'abc123' and a placeId of 'def456.
axios.post("http://localhost:8000/restaurants/new", {accountId:'abc123', placeId:'def456'})
