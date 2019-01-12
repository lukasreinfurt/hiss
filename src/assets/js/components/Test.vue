<template>
  <div id="contentWrapper" class="flex-container">
    <header><NavBar :title="title" hamburger></NavBar></header>
    <div id="mainWrapper" class="flex-container">
      <main class="flex-container">
        <div>
          <h1>Test</h1>
          <button>Default</button> <button class="secondary">Default</button>
          <button class="primary">Default</button>
          <section class="flex-container horizontal wrap">
            <div class="color primary-1"></div>
            <div class="color primary-2"></div>
            <div class="color primary-3"></div>
            <div class="color primary-4"></div>
            <div class="color primary-5"></div>
            <div class="color primary-6"></div>
            <div class="color primary-7"></div>
            <div class="color primary-8"></div>
            <div class="color primary-9"></div>
            <button class="primary">GET STARTED</button>
            <div class="info primary">This is a test info component</div>
          </section>
          <section class="flex-container horizontal wrap">
            <div class="color neutral-1"></div>
            <div class="color neutral-2"></div>
            <div class="color neutral-3"></div>
            <div class="color neutral-4"></div>
            <div class="color neutral-5"></div>
            <div class="color neutral-6"></div>
            <div class="color neutral-7"></div>
            <div class="color neutral-8"></div>
            <div class="color neutral-9"></div>
            <button class="neutral">GET STARTED</button>
            <div class="info neutral">This is a test info component</div>
          </section>
          <section class="flex-container horizontal wrap">
            <div class="color accent-red-1"></div>
            <div class="color accent-red-2"></div>
            <div class="color accent-red-3"></div>
            <div class="color accent-red-4"></div>
            <div class="color accent-red-5"></div>
            <div class="color accent-red-6"></div>
            <div class="color accent-red-7"></div>
            <div class="color accent-red-8"></div>
            <div class="color accent-red-9"></div>
            <button class="accent-red">GET STARTED</button>
            <div class="info accent-red">This is a test info component</div>
          </section>
          <section class="flex-container horizontal wrap">
            <div class="color accent-yellow-1"></div>
            <div class="color accent-yellow-2"></div>
            <div class="color accent-yellow-3"></div>
            <div class="color accent-yellow-4"></div>
            <div class="color accent-yellow-5"></div>
            <div class="color accent-yellow-6"></div>
            <div class="color accent-yellow-7"></div>
            <div class="color accent-yellow-8"></div>
            <div class="color accent-yellow-9"></div>
            <button class="accent-yellow">GET STARTED</button>
            <div class="info accent-yellow">This is a test info component</div>
          </section>
          <section class="flex-container horizontal wrap">
            <div class="color accent-green-1"></div>
            <div class="color accent-green-2"></div>
            <div class="color accent-green-3"></div>
            <div class="color accent-green-4"></div>
            <div class="color accent-green-5"></div>
            <div class="color accent-green-6"></div>
            <div class="color accent-green-7"></div>
            <div class="color accent-green-8"></div>
            <div class="color accent-green-9"></div>
            <button class="accent-green">GET STARTED</button>
            <div class="info accent-green">This is a test info component</div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "Test",
  components: {
    NavBar
  },
  data: function() {
    return {
      title: "Test"
    };
  }
};
</script>
