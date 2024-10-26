# Web Crawler

## Task

We're building a web crawler that helps website owners improve their SEO by analyzing internal linking structures.

## Spec

Our web crawler should:
1. Start from a given URL
2. Visit web pages
3. Read their content
4. Extract and follow links to find new pages
5. Index the pages it finds
6. Generate a report showing how many times each page was linked to

## Plan

1. Set up the project
   - Initialize a Node.js project
   - Set up version control with Git
   - Use NVM for consistent Node.js versioning

2. Implement core functionality
   - Create a function to normalize URLs
   - Develop a function to extract links from HTML
   - Build the main crawling function

3. Add reporting
   - Create a function to sort and display crawl results

4. Implement testing
   - Set up Jest for unit testing
   - Write tests for each main function

## Code

### Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Use `npm start <BASE_URL>` to run the crawler (replace `<BASE_URL>` with the website you want to crawl)
4. View the report in your console

### Testing

Run `npm test` to execute the Jest test suite.

### Dependencies

- Node.js (v21.2.0)
- Jest (for testing)
- JSDOM (for HTML parsing)

### Project Structure

- `main.js`: Entry point of the application
- `crawl.js`: Contains the core crawling logic
- `report.js`: Handles the generation and display of the crawl report
- `crawl.test.js` and `report.test.js`: Test files for the respective modules

### Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.
