/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://muhammadichsan.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  },
  sitemapSize: 10000
}
