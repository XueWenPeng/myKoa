
const routerExports = {}

routerExports.getIndex = {
    method: 'get',
    url: '/*',
    route: async (ctx, next) => {
        ctx.render('index')
    }
}

module.exports = routerExports