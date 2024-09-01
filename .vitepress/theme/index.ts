// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { useRoute, useRouter } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.config.globalProperties.$navigateToPage = (page) => {
      const route = useRoute();
      const locale = route.path.split('/')[1];
      router.go(`/${locale}/${page}`);
    };
  }
} satisfies Theme
