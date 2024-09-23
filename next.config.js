module.exports = {
    async rewrites() {
      return []
    },
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/AVATS',
            destination: '/AVATS/retrieveApplication.aspx',
            permanent: true,
          },
        ]
    }
}    