import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import store from './store';
import router from './routes';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BasePrice from './components/UI/BasePrice.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-dialog', BaseDialog);
app.component('base-price', BasePrice);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
