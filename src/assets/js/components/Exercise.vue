<template>
  <div id="contentWrapper" class="flex-container">
    <header><NavBar :title="title"></NavBar></header>
    <div id="mainWrapper" class="flex-container">
      <main class="flex-container">
        <input v-model="name" placeholder="Exercise Name" />
        <select v-model="equipment">
          <option>machine</option>
          <option>free-weight</option>
          <option>bodyweight</option>
        </select>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "Exercise",
  components: {
    NavBar
  },
  props: {
    id: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  data: function() {
    return {
      title: "Exercise"
    };
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
