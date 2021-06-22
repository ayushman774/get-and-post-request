const koa = require('koa');
const Router = require('koa-router');
const render = require('koa-ejs')
const path = require('path')


const app = new Koa();
const router = new Router();

render(app,{
    root: path.join(__dirname,"views"),
    layout:"template",
    viewExt:"html",
    cache:false,
    debug:false,
    async: true
});

const users = [{
    firstName:"",
    lastName : "",
    email: "",
    phoneNo: "",
    dateOfBirth: ""

}]

router.post("/users", async ctx => {
    await ctx.render("index",{
        users:users
    });
});



app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);