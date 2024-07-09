# webcrawlerhttp

A program(web crawler) that visits web pages, reads their content, and follows links to find and index new pages.

# Web Crawler Project

## Why This Project?

We're building a Web Crawler in JavaScript using Node.js to help websites rank better in Google Search. Good internal linking between pages on a website is crucial for SEO, and this tool will help website owners understand and improve their internal linking structure.

## What We've Done

### 1. Project Setup

- We've set up a Node.js project using `npm init`.
- We're using NVM (Node Version Manager) to ensure everyone uses the same Node.js version (21.2.0).
- We've created a basic "Hello World" script to test our setup.

Why? This ensures a consistent development environment and makes it easy for others to contribute to the project.

### 2. Version Control

- We've set up a `.gitignore` file to exclude unnecessary files from our Git repository.

Why? This keeps our repository clean and prevents large or sensitive files from being shared.

### 3. Test-Driven Development (TDD)

- We've installed Jest, a popular JavaScript testing framework.
- We've set up test scripts in our `package.json` file.

Why? TDD helps us write more reliable code and catch bugs early in the development process.

### 4. URL Normalization

- We've created a `normalizeURL()` function to standardize URLs.

Why? This helps us accurately compare and count URLs, even if they're written slightly differently.

### 5. HTML Parsing

- We've installed JSDOM to parse HTML content.
- We've created a `getURLsFromHTML()` function to extract links from HTML.

Why? This allows us to find all the links on a webpage, which is crucial for our crawler.

### 6. Web Crawling

- We've implemented a `crawlPage()` function that:
  - Fetches web pages
  - Extracts links
  - Recursively crawls internal links

Why? This is the core functionality of our web crawler, allowing it to explore an entire website.

### 7. Reporting

- We've created a `printReport()` function to display the crawling results in a user-friendly format.

Why? This makes the output of our crawler easy to understand and act upon.

## How to Use

1. Clone this repository
2. Run `npm install` to install dependencies
3. Use `npm start <BASE_URL>` to run the crawler, replacing `<BASE_URL>` with the website you want to crawl
4. View the report in your console

## Testing

Run `npm test` to execute the Jest test suite.

## Dependencies

- Node.js (v21.2.0)
- Jest (for testing)
- JSDOM (for HTML parsing)

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
