import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css ';
import 'primeicons/primeicons.css';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import Sidebar from 'primevue/sidebar';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(ToastService);

app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('InputText', InputText);
app.component('InputMask', InputMask);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('Tag', Tag);
app.component('Toast', Toast);
app.component('Sidebar', Sidebar);

app.mount('#app');
