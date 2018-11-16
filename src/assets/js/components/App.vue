<template>
  <div id="app">
    <nav>
      <ul class="flex-container horizontal">
        <li>
          <router-link to="/workouts">Workouts</router-link>
        </li>
        <li>
          <router-link to="/exercises">Exercises</router-link>
        </li>
        <li>
          <router-link to="/templates">Templates</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>