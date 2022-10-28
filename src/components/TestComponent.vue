<script setup lang="ts">
import { inject } from "vue";
import { provideTestKey } from "../plugins/test_plugin";
import { moduleProvideTestKey } from "@test/module";

const testInject = inject(provideTestKey);
const moduleTestInject = inject(moduleProvideTestKey);
</script>

<template>
    <div class="test-component">
        <h2>Local Test Component</h2>
        <div>Local inject: {{ testInject }}</div>
        <div>Module inject: {{ moduleTestInject }}</div>
    </div>
</template>
