const json=require('json-server');
const server=json.create();
const middleWare=json.defaults();
const router=json.router('db.json');

const PORT=3000|| process.env.PORT;

server.use(middleWare);
server.use(router);

server.listen(PORT,()=>{
    console.log("server running successfully");
})