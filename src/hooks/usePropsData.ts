import { toRefs, onMounted } from "vue";
export default {
  setup(props: any) {
    const data: any = {};

    onMounted(() => {
      Object.keys(props).forEach(i => {
        data[i] = toRefs(props[i].value);
      });
      console.log(props, "12312312312312312312312");
    });

    return data;
  }
};
