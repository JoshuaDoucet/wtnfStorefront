## Frontend Architecture Design
* The frontend of the application is built using Angular
* The frontend persists and interacts with data using the backend API which is hosted on AWS and is built usibg Node.js, Express, and Postgress

### Components
#### Navigation Component
* The **NavigationComponent** provides easy access to application routes such as products, sign-in, sign-out, cart, and account details

#### Cart Components
* All components have a child **NavigationComponent** to assist in navigating the application
* The **CartComponent** has 2 children components **CartCheckoutComponent** and **CartProductsComponent**
* **CartCheckoutComponent** is used to place an order
* **CartProducts** displays a list of products in the users cart and has 1 child **ProductCartItem** component for each product in the cart.
* **OrderConfirmComponent** is where users will see information about a successfully completed order after checkout 

#### Products Components
* **ProductsComponent** shows a list of products available for sale where each product is displayed in a child component called **ProductListItemComponent**
* **ProductsListItemComponent** shows a few details about a product and the option to add that product to the user's cart.
* **ProductDetailsComponent** displays extensive information about a product with the option to add to cart.

#### User and Authentication Components
* **SigninComponent** allows a user to log in to the application and depends on the **AuthenticationService** to verify identity in the backend.
* **SignupComponent** allows a new user to create a user account. **AuthenticationService** is used to create the new identity.
* **UserProfileComponent** interacts with logged in user data and displays information about the logged in user.


### Interceptors
* **AuthInterceptor** is used to add a JsonWebTokens to each API request.

### Services
* There are many services to fetch API data for the corresponding components.
* **ConfigurationService** is used to configure the connection to the backend API and database

