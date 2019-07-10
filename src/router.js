const routers = [{
    path: '/',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/editor',
    meta: {
        title: '编辑器'
    },
    component: (resolve) => require(['./views/editor.vue'], resolve)
}];
export default routers;