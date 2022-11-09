import { defineComponent, h } from "vue";
import { onInputData, TuiText } from "vue-termui";

export const Input = defineComponent({
  props: {
    modelValue: {
      required: true,
      type: String,
    },
    placeholder: {
      default: "",
      type: String,
    },
  },
  setup(props, { emit }) {
    const { modelValue, placeholder } = props;
    console.log(modelValue, "?");

    const active = ref<boolean>(true);

    function update(value: string) {
      emit("update:modelValue", value);
    }

    onInputData(({ data, event }) => {
      update(data);
    });

    return () =>
      placeholder && !modelValue
        ? h(TuiText, () => placeholder)
        : h(TuiText, { dimmed: true }, () => modelValue);
  },
});
