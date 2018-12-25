<template>
  <div>
    <h2><input v-model="name" placeholder="Exercise Name" /></h2>
    <select v-model="equipment">
      <option>machine</option>
      <option>free-weight</option>
      <option>bodyweight</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Exercise",
  props: {
    id: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  computed: {
    exercise() {
      return this.$store.state.exercises.exercises[this.id];
    },
    name: {
      get() {
        return this.$store.state.exercises.exercises[this.id].name;
      },
      set(value) {
        this.$store.commit("exercises/updateName", {
          id: this.id,
          value: value
        });
      }
    },
    equipment: {
      get() {
        return this.$store.state.exercises.exercises[this.id].equipment;
      },
      set(value) {
        this.$store.commit("exercises/updateEquipment", {
          id: this.id,
          value: value
        });
      }
    }
  }
};
</script>
