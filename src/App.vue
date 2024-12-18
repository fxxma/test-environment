<template>
  <div class="min-h-screen">
    <nav class="bg-gray-800 p-4">
      <div class="max-w-7xl mx-auto flex gap-4">
        <router-link to="/" class="text-white hover:text-gray-300"
          >Dashboard</router-link
        >
        <router-link to="/upload" class="text-white hover:text-gray-300"
          >Upload</router-link
        >
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>
