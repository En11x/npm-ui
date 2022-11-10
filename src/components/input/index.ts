import { defineComponent, h, computed, ref } from "vue";
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
    const active = ref<boolean>(true);
    const text = computed({
      get() {
        return props.modelValue;
      },
      set(val: string) {
        emit("update:modelValue", val);
      },
    });

    onInputData(({ data, event }) => {
      text.value += data;
    });

    return () =>
      text.value
        ? h(TuiText, () => text.value)
        : h(TuiText, { dimmed: true }, () => props.placeholder);
  },
});
