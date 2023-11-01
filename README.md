# Staff Management Application

## Getting Started

## Overview

This is a Staff Management Application that allows you to manage information about employees in your organization. You can perform operations like creating, updating, retrieving, and deleting staff members. The application is built with Node.js, Express, and MongoDB, and it provides a RESTful API for managing staff data.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed.
- MongoDB set up and running.

### Installation

1. Clone the repository:git clone https://github.com/ONyeNYC/Project_Staff_Management_API

2. Change to the project directory: cd staff-management-app

3. Install dependencies: npm install

4. Create a `.env` file in the root directory with the following environment variables: MONGODB_URI=your_mongodb_url_here

Replace `your_mongodb_url_here` with your MongoDB connection URI.

5. Start the application:

The application should now be running on `http://localhost:3000`.

## Usage

- Use tools like Postman or curl to interact with the API.

## API Endpoints

### Retrieve All Staff Members

- **URL**: `/api/staffs`
- **Method**: `GET`
- **Description**: Retrieve a list of all staff members.
- **Response**: JSON array of staff members.

### Retrieve Staff Member by ID

- **URL**: `/api/staffs/:id`
- **Method**: `GET`
- **Description**: Retrieve a staff member by their ID.
- **Response**: JSON object of the staff member or a "Staff not found!" message if not found.

### Create a New Staff Member

- **URL**: `/api/staffs`
- **Method**: `POST`
- **Description**: Create a new staff member.
- **Request Body**: JSON object with staff member details.
- **Response**: JSON object of the created staff member or an error message.

### Update Staff Member by ID

- \*\*URL`: `/api/staffs/:id`
- \*\*Method`: `PUT`
- **Description**: Update a staff member's details by their ID.
- **Request Body**: JSON object with updated staff member details.
- **Response**: JSON object of the updated staff member or an error message.

### Delete Staff Member by ID

- \*\*URL`: `/api/staffs/:id`
- \*\*Method`: `DELETE`
- **Description**: Delete a staff member by their ID.
- **Response**: "Staff deleted!" message or a "Staff not found!" message if not found.

### Search Staff Members by Name

- \*\*URL`: `/api/staffs/search/:name`
- \*\*Method`: `GET`
- **Description**: Search for staff members by name.
- **Response**: JSON array of matching staff members or a "Staff not found for the given name." message if not found.

## Contributing

Contributions are welcome! Please follow these guidelines when contributing to the project:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes.
4. Test your changes.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
