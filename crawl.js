import { JSDOM } from 'jsdom'

// use the default arguments to prime the first call
async function crawlPage(baseURL, currentURL, pages){
    // if this is a url whose domain name is not same, come out of it immediately.
    const baseURLObj = new URL(baseURL)
    const currentURLObj = new URL(currentURL)
    if (baseURLObj.hostname !== currentURLObj.hostname){
        return pages
    }

    // use a consistent URL format
    const normalizedCurrentURL = normalizeURL(currentURL)


    // if we have already visited this page
    // just increase the count and don't repeat
    // the http request
    if (pages[normalizedCurrentURL] > 0){
        pages[normalizedCurrentURL] ++
        return pages
    }

    // initialize this page in the map
    // since it doesn't exist yet
    pages[normalizedCurrentURL] = 1
    // fetch and parse the html of the currentURL
    console.log(`actively crawling currentURL: ${currentURL}`)

    try {
        const resp = await fetch(currentURL)

        if (resp.status > 399){
            console.log(`error in fetch with status code: ${resp.status},on page: ${currentURL}`)
            return pages
        }

        const contentType = resp.headers.get('content-type')
        if (!contentType.includes('text/html')) {
            console.log(`non html response, content type: ${contentType},on page: ${currentURL}`)
            return pages
        }
        const htmlBody = await resp.text()
        // recur through the page's links
        const nextURLs = getURLsFromHTML(htmlBody, baseURL)

        for (const nextURL of nextURLs) {
            pages = await crawlPage(baseURL, nextURL, pages)
        }

    } catch (err) {
        console.log(`error in fetch: ${err.message}, on page: ${currentURL}`)
    }
    return pages
}

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const linkElement of linkElements) {
        if(linkElement.href.slice(0, 1) === '/'){
            // relative URL
            try{
                const urlObj = new URL(`${baseURL}${linkElement.href}`)
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`error with relative URL: ${err.message}`)
            }
        } else {
            // absolute URL
            try{
                const urlObj = new URL(linkElement.href)
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`error with absolute URL: ${err.message}`)
            }
            
        }
    }
    return urls
}

function normalizeURL(urlString){
    const urlObj = new URL(urlString)
    let fullPath = `${urlObj.hostname}${urlObj.pathname}`
    if(fullPath.slice(-1) === '/') {
        fullPath = fullPath.slice(0, -1)
    }
    return fullPath    
}


export { normalizeURL, getURLsFromHTML, crawlPage }
