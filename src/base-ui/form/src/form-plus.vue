<template>
  <div class="form-plus">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWith">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IFormItem } from "../types/index";
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => [],
    },
    labelWith: {
      type: String,
      default: "100px",
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: "5px 10px",
      }),
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // ≥1920px
        lg: 8, // ≥1200px
        md: 12, // ≥992px
        sm: 24, // ≥768px
        xs: 24, // <768px
      }),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue });
    // watch(
    //   () => props.modelValue,
    //   (newValue) => {
    //     formData.value = { ...newValue };
    //   }
    // );
    // watch(
    //   formData,
    //   (newValue) => {
    //     emit("update:modelValue", newValue);
    //   },
    //   { deep: true }
    // );
    const handleValueChange = (value: any, field: string) => {
      emit("update:modelValue", { ...props.modelValue, [field]: value });
    };
    return { handleValueChange };
  },
});
</script>

<style lang="less" scoped>
.form-plus {
  padding-top: 22px;
  .form-item {
    padding: 5px 10px;
  }
}
</style>
