/* eslint-disable import/prefer-default-export */
import { createSSRApp } from 'vue';
import App from './App.vue';

export function createApp(): any {
  const app = createSSRApp(App);
  return {
    app,
  };
}
