<style scoped>
    .index {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        /*background: #5E52FE;*/
    }

    .sider {
        background: #ffffff;
        width: 300px !important;
        min-width: 300px !important;
        max-width: 300px !important;
        flex: 0 0 300px !important;
        text-align: left;
    }
</style>
<template>
    <Layout class="index">
        <Sider class="sider">
            <CellGroup>
                <Cell title="内容1"/>
                <Cell title="内容2"/>
            </CellGroup>
        </Sider>
        <Layout>
            <Content style="background: #ffffff;text-align: left">

            </Content>
        </Layout>
    </Layout>
</template>
<script>
    export default {
        data() {
            return {
                content: "",
            }
        },
        mounted() {
        },
        methods: {}
    };
</script>