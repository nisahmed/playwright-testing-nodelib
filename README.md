# Playwright Library

## Overview
This Playwright library provides a comprehensive framework for testing REST APIs, web applications, and database interactions. It utilizes the Page Object Model for UI testing and includes utilities for random test data generation and environment management.

## Features
- **REST API Testing**: Easily test REST APIs with the `ApiClient` class.
- **Database Connectivity**: Connect and interact with databases using the `DbClient` class.
- **Page Object Model**: Simplify UI testing with the `BasePage` class.
- **Random Test Data Generation**: Generate random data for testing purposes.
- **Environment Management**: Manage environment variables and configurations.
- **CI Integration**: Built-in support for GitHub Actions for continuous integration.

## Installation
To install the library, run the following command:

```
npm install playwright-library
```

## Usage

### API Testing
```typescript
import { ApiClient } from './src/api/apiClient';

const apiClient = new ApiClient();
apiClient.get('/endpoint').then(response => {
    console.log(response);
});
```

### Database Testing
```typescript
import { DbClient } from './src/db/dbClient';

const dbClient = new DbClient();
dbClient.connect().then(() => {
    return dbClient.executeQuery('SELECT * FROM table');
}).then(results => {
    console.log(results);
});
```

### UI Testing
```typescript
import { BasePage } from './src/pages/basePage';

const page = new BasePage();
page.navigateTo('https://example.com');
console.log(page.getTitle());
```

## Running Tests
To run the tests, use the following command:

```
npm test
```

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.