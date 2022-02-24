## Backend Architecture Design
* The storefront backend API is built on PostgreSQL, Node.js, and Express and is hosted on AWS EB

* Each database table corresponds to a Model in the models folder
* Each model interacts with the corresponding database table
* Each model corresponds to a handler file which is trigged by specific API routes.
* When a request with a particular route is recieved by the web server, the web server calls the corresponding handler function which then calls the corresponding model function. That model function then interacts with the corresponding database table.
* Once the database is interacted with the database returns some data to the model function. The model function returns the data to the handler function, and the handler function may use that data in the HTTP response.

* To see the database schema navigate to the /migrations folder in the backend application