<template>
    <div>
        <slot name="failure" v-if="failed"></slot>

        <div v-else>
            <component :is="fetchedComponent" v-bind="$props" v-if="loadedHtml"/>

            <slot name="loading" v-else></slot>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'VueFetchHtml',

        props: { url: String },

        data() {
            return {
                loadedHtml: null,
                failed: false
            }
        },

        mounted() {
            axios.get(this.url)
                .then(({ data }) => {
                    this.loadedHtml = data;
                }).catch(() => {
                    this.failed = true;
                });
        },

        computed: {
            fetchedComponent() {
                return {
                    template: this.loadedHtml,
                    props: this.$options.props
                }
            }
        }
    }
</script>
