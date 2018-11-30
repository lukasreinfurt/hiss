<template>
  <div id="app">
    <nav>
      <ul class="flex-container horizontal">
        <li><router-link to="/log">Log</router-link></li>
        <li><router-link to="/exercises">Exercises</router-link></li>
        <li><router-link to="/workouts">Workouts</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
