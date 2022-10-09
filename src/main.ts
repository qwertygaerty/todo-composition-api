import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Prism from 'prismjs';

import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});


const app = createApp(App);

app.component('InputText', InputText);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Button', Button);

app.use(router).use(VueMarkdownEditor).use(PrimeVue, {ripple: true}).mount('#app')

