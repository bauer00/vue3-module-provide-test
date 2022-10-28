import { createApp } from 'vue';
import { testPlugin } from './plugins/test_plugin';
import { moduleTestPlugin } from '@test/module';
import App from './App.vue';

const app = createApp(App);
app.use(testPlugin);
app.use(moduleTestPlugin);

app.mount('#app');
