<template>
  <div class="pre-sale">
    <div class="job">
      <slot name="jobTitle"></slot>
    </div>
    <div class="content">
      <!-- 岗位职责 -->
      <div class="position">
        <div class="j">岗位职责</div>
        <div class="positionNav">
          <slot name="jobStatement"></slot>
        </div>
      </div>
      <!-- 任职要求 -->
      <div class="require">
        <div class="j">任职要求</div>
        <div class="positionNav positionNav2">
          <slot name="jobRequire"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "recruitList",
  setup() {},
};
</script>

<style lang="sass" scoped></style>
