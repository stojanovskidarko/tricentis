import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://demowebshop.tricentis.com/',
        testIsolation: true,
    },
});
