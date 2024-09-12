# Country Information Web Application

## Overview

This web application displays information about various countries using AngularJS and CSS. It features a card-based UI that allows users to view basic details about countries and navigate to a detailed view for more information. Filtering functionality is also implemented to refine the list of countries by name and region.

## Features

- **Country Cards**: Displays a list of countries with basic information such as name, flag, population, region, and capital.
- **Detailed View**: Provides detailed information about a selected country on a separate page.
- **Filtering**: Allows users to filter countries by name and region.

## Project Structure

- **`index.html`**: Main page displaying country cards.
- **`details.html`**: Detailed view page for a selected country.
- **`app.js`**: Contains AngularJS application logic, including controllers and routes.
- **`styles.css`**: CSS file for styling the application.
- **`data.json`**: JSON file with country information.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   
2. **Using http-server (Node.js)**
   
  Install Node.js
  If you don't have Node.js installed, download and install it.
  
  Install http-server
  Open your terminal or command prompt and run:
  npm install -g http-server
  
  Start the Server
  Navigate to your project directory and start the server with:
  http-server
  
3. **Open in Browser**

   Open index.html in a web browser to view the application. For local development, a local server like http-server can be used.
   Dependencies
    
   This project uses AngularJS. Ensure you have a modern web browser.

## How to Use
1. Navigate to the Main Page

The main page shows a list of countries in card format. Each card displays the country’s name, flag, population, region, and capital.
Use the search bar and filter dropdown to refine the list by name and region.

2.View Country Details

Click on a country card to navigate to the detailed view page for that country.
The detailed view shows additional information, including native name, subregion, top-level domain, currencies, languages, and border countries.

## Implementation Details

AngularJS Setup

Define AngularJS Modules and Controllers
app.js: Set up AngularJS modules, controllers, and routes to handle navigation and data fetching.
Configure Routes

Define routes for the main page ('/') and the details page ('/details/:code').

UI Design
Style the Application

Use styles.css to style country cards and the details page.
Ensure a clean and functional design that works well on different screen sizes.
Responsiveness

Make sure the application is responsive and usable across various devices.
Data Handling
Prepare JSON Data

Ensure data.json is properly formatted with country details, including name, flag, population, region, capital, languages, and currencies.
Testing
Verify Navigation

Test that clicking on a country card correctly navigates to the detailed view page.
Check Filtering

Ensure that the filtering functionality works as expected for both name and region.
Deployment
Host the Application

Deploy the application on a web server or local environment to test its functionality. Ensure all files are correctly referenced and accessible.
Contribution
Feel free to fork the repository and contribute. For issues or feature requests, please create an issue in the repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
AngularJS - JavaScript framework used.
CSS - Styling.
