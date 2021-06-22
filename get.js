const koa = require('koa');
const Router = require('koa-router');
const render = require('koa-ejs')
const path = require('path')


const app = new koa();
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

router.get("/users/:user.email",  ctx => {
    ctx.body = users[ctx.params.email]
});

app.use(router.routes()).use(router.allowedMethods()).use(require('koa-body')());
app.listen(3000);