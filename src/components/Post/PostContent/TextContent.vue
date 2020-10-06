<script>
    import {h} from 'vue'

    export default {
        setup(props, {slots}) {
            return () => h(props.tag, {
                    class: props.tag,
                },
                slots.default()
            );
        },

        name: "TextContent",
        props: {
            tag: {
                type: String,
                required: true,
            },
        }
    }
</script>
