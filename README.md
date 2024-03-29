
# Node Farm

Node Farm is a Node.js project for showcasing farm products through a web application. The project includes a server written in Node.js using the HTTP module and utilizes the `slugify` library for creating slugs.

## Project Structure

- **index.js:** Main file with server setup and routing logic.
- **templates/:** HTML templates for overview and product pages.
- **dev-data/:** Sample JSON file (`data.json`) with farm product information.
- **modules/:** `replaceTemplate` module for dynamic template replacement.
- **package.json:** Project configuration file with dependencies and scripts.
- **.gitignore:** Specifies files and folders to be ignored by Git.

## Features

- **Overview Page:** Displays a list of farm products with brief information.
- **Product Page:** Provides detailed information about a specific farm product.
- **API Endpoint:** Accessible at `/api`, returns farm product data in JSON format.

## Technologies Used

- Node.js
- HTTP module
- URL module
- `slugify` library

## Templates

- **template-overview.html:** HTML template for the overview page.
- **template-card.html:** HTML template for individual product cards.
- **template-product.html:** HTML template for the detailed product page.

## Contributors

- Youssef Khalifa

## License

This project is licensed under the ISC License.
