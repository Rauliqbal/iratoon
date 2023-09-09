// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   app: {
      head: {
         title: "IRATOON - Manga & Komik",
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",

         meta: [{ name: "description", content: "Temukan berbagai macam manga dan komik dengan bahasa Indonesia terbaru." }],
         link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Rubik:wght@400;500;600&display=swap" }],
         script: [{src: "https://unpkg.com/akar-icons-fonts"}]
      },
   },
   modules: ["@vite-pwa/nuxt", "nuxt-swiper"],
   pwa: {
      manifest: {
         name: "IRATOON - Manga & Komik",
         short_name: "IRATOON",
         start_url: ".",
         display: "standalone",
         theme_color: "#fff",
         description: "Temukan berbagai macam manga dan komik dengan bahasa Indonesia terbaru.",
         icons: [
            {
               src: "/icon-48.png",
               sizes: "48x48",
               type: "image/png",
            },
            {
               src: "/icon-72.png",
               sizes: "72x72",
               type: "image/png",
            },
            {
               src: "/icon-96.png",
               sizes: "96x96",
               type: "image/png",
            },
            {
               src: "/icon-144.png",
               sizes: "144x144",
               type: "image/png",
            },
            {
               src: "/icon-168.png",
               sizes: "168x168",
               type: "image/png",
            },
            {
               src: "/icon-192.png",
               sizes: "192x192",
               type: "image/png",
            },
         ],
      },
      workbox: {
         navigateFallback: "/",
      },
      devOptions: {
         enabled: true,
         type: "module",
      },
   },
});
