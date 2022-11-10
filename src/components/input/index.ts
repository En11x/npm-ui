import { defineComponent, h, computed } from "vue";
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
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const text = computed({
      get() {
        return props.modelValue;
      },
      set(val: string) {
        emit("update:modelValue", val);
      },
    });

    onInputData(({ data, event }) => {
      text.value = data;
    });

    return () => h(TuiText, () => text.value);
  },
});
