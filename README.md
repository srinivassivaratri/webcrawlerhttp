# 🕷️ SEOcrawl

A lightning-fast web crawler that helps website owners optimize their SEO by analyzing and visualizing internal linking structures.

## Why?

Internal linking is crucial for SEO, but manually tracking links across a large website is time-consuming and error-prone. SEOcrawl automates this process by:

- Discovering all pages within your domain
- Analyzing link relationships
- Identifying orphaned pages
- Generating detailed reports on link distribution
- Helping prioritize content that needs more internal links

## 🚀 Quick Start

### Install dependencies

```bash
npm install
```

### Run the crawler

```bash
npm start https://your-website.com
```

The crawler will analyze your site and generate a report showing how many times each page is linked to.

## 📖 Usage

### Command Line Arguments

The crawler accepts a single argument - the base URL to start crawling from:

```bash
npm start <BASE_URL>
```

### Example Output

```
=======
REPORT!!!...
=======
Found 12 links to page: blog.example.com/popular-post
Found 8 links to page: blog.example.com/about
Found 3 links to page: blog.example.com/contact
=======
END REPORT...
=======
```

### Features

- ✨ Respects domain boundaries (won't crawl external sites)
- 🔍 Normalizes URLs for accurate counting
- 🏃‍♂️ Efficient crawling with async/await
- 🎯 Handles both relative and absolute URLs
- 📊 Sorted reports by link frequency
- 🚫 Error handling for invalid URLs and non-HTML responses

## 🤝 Contributing

### Setup Development Environment

1. Clone the repository
```bash
git clone https://github.com/yourusername/seocrawl.git
cd seocrawl
```

2. Install dependencies
```bash
npm install
```

3. Run tests
```bash
npm test
```

### Project Structure

- `main.js` - Entry point and CLI handling
- `crawl.js` - Core crawling logic including URL normalization and HTML parsing
- `report.js` - Report generation and sorting
- `crawl.test.js` - Tests for URL handling and HTML parsing
- `report.test.js` - Tests for report sorting functionality

### Core Functions

- `normalizeURL()` - Standardizes URLs for consistent counting
- `getURLsFromHTML()` - Extracts and validates links from HTML content
- `crawlPage()` - Main crawling logic with recursive link following
- `printReport()` - Generates human-readable output
- `sortPages()` - Sorts pages by link count

### Technical Requirements

- Node.js v21.2.0 or higher
- Dependencies:
  - Jest (testing)
  - JSDOM (HTML parsing)

For major changes, please open an issue first to discuss what you'd like to change.
