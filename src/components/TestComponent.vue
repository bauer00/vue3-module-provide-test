<script setup lang="ts">
import { inject } from "vue";
import { provideTestKey } from "../plugins/test_plugin";

const testInject = inject(provideTestKey);
</script>

<template>
    <div class="test-component">
        <h2>Local Test Component</h2>
        <div>Local inject: {{ testInject }}</div>
    </div>
</template>
