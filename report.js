// printReport takes a dictionary of pages and prints them
// to the console in a human-friendly way
function printReport(pages){
    console.log('=======')
    console.log('REPORT!!!...')
    console.log('=======')
    const sortedPages = sortPages(pages)
    for (const sortPage of sortedPages){
        const url = sortPage[0]
        const hits = sortPage[1]
        console.log(`Found ${hits} links to page: ${url}`)
    }
    console.log('=======')
    console.log('END REPORT...')
    console.log('=======')
}


// sortPages sorts a dictionary of pages
// into a list of tuples (url, count)
// with the highest counts first in the list
function sortPages(pages){
    const pagesArr = Object.entries(pages)
    pagesArr.sort((a, b) => {
        const aHits = a[1]
        const bHits = b[1]
        return b[1] - a[1]
    })
    return pagesArr
}

export { sortPages, printReport }