import { defineComponent, h } from "vue";
import { TuiText } from "vue-termui";

export const Input = defineComponent({
  props: {},
  setup() {
    return () => h(TuiText, ()=>"input");
  },
});
