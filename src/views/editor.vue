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
</style>
<template>
    <Layout class="index">
        <Content style="background: #ffffff;text-align: left">
            <i-editor v-model="content" :autosize="{}" placeholder="content" :highlight="highlight"></i-editor>
        </Content>
    </Layout>
</template>
<script>
    import hljs from 'highlight.js'

    export default {
        data() {
            return {
                content: "",
                autosize: true,
            }
        },
        mounted() {
        },
        methods: {
            highlight(code) {
                return hljs.highlightAuto(code, ['html', 'javascript']).value;
            }
        }
    };
</script>