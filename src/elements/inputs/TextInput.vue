<script>
var uuid = 1;

export default {
  beforeCreate() {
    this.uuid = uuid.toString(); //TODO: check if props defined
    uuid += 1;
  },
  props: {
    id: {
      type: [String, Number],
      default: function() {
        return this.uuid;
      }
    },
    label: String,
    name: String,
    model: [String, Number]
  }
};
</script>

<template>
  <div :class="$stl.formControl">
    <label v-if="label" :for="id" :aria-label="label" v-once>{{ label }}</label>
    <input :id="id" v-model.lazy="model" type="text" :name="name" />
  </div>
</template>

<style module="$stl" lang="scss">
.form-control {
  label,
  input {
    display: block;
  }
  input {
    width: 100%;
  }
}
</style>
