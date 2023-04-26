import PrimeVue from 'primevue/config';
import { defineNuxtPlugin } from '#app';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';



export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
  })