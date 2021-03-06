module.exports = {
    result: {
        listItem: "tr:not(.header)",
        data: {
            name: "a.detLink",
            size: {
                selector: ".detDesc",
                convert: x => {
                    return x.match(/Size (.*),/)[1]
                }
            },
            seeders: {
                selector: "td",
                eq: 2
            },
            leechers: {
                selector: "td",
                eq: 3
            },
            magnetLink: {
                selector: "a",
                eq: 3,
                attr: "href"
            },
            link: {
                selector: "a.detLink",
                attr: "href",
                convert: x => `https://proxyproxyproxy.nl${x}`
            }
        }
    }
}

