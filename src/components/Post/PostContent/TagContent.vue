<script>
    import {h} from 'vue'

    export default {
        setup(props, {slots}) {
            return () => h(props.tag, {},
                slots.default()
            );
        },

        name: "TagContent",
        props: {
            tag: {
                type: String,
                required: true,
            },
        }
    }
</script>
