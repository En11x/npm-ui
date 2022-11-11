import { SKIP_EVENT_KEY } from "@/types";
import { computed, defineComponent, h, ref } from "vue";
import { KeyDataEvent, onInputData, TuiText } from "vue-termui";

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
      if (!active.value || !event) {
        return;
      }
      const eventKey = (<KeyDataEvent>event).key;
      if (
        Object.values(SKIP_EVENT_KEY).includes(eventKey as any) ||
        !eventKey
      ) {
        return;
      }
      //delete
      if (eventKey === "H" && data !== "H") {
        text.value = props.modelValue.substring(0, props.modelValue.length - 1);
      } else {
        text.value = props.modelValue + data;
      }
    });

    return () =>
      text.value
        ? h(TuiText, () => text.value)
        : h(TuiText, { dimmed: true }, () => props.placeholder);
  },
});
