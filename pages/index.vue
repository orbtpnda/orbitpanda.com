<template>
  <div class="min-h-screen">
    <div class="xl:absolute left-0 top-0 w-full">
      <div class="flex flex-wrap justify-between items-center py-6 container">
        <div>
          <router-link to="/">
            <img
              src="/images/logo/logo-orbitpanda.png"
              alt=""
              width="200"
              height="45"
              v-if="!dark"
            />
            <img src="/images/logo/logo-white.svg" alt="" v-if="dark" />
          </router-link>
        </div>
        <div>
          <Button text="Contact us" btnClass=" btn-outline-dark btn-sm" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="flex justify-between flex-wrap items-center min-h-screen">
        <div class="max-w-[500px] space-y-4">
          <div
            class="relative flex space-x-3 items-center text-2xl text-slate-900 dark:text-white"
          >
            <!-- <span class="inline-block w-[25px] bg-secondary-500 h-[1px]"></span -->
            <span> 🛰️ Orbit soon.. </span>
          </div>
          <div
            class="xl:text-[70px] xl:leading-[70px] text-4xl font-semibold text-slate-900 dark:text-white"
          >
            Get Your WordPress Site Up and Running Fast.
          </div>
          <p
            class="font-normal text-slate-600 dark:text-slate-300 max-w-[600px]"
          >
            Join our early access list and be the first to know when our app
            launches. Exclusives access are waiting.
          </p>
          <FormNewsLetter />
          <div class="text-sm text-slate-500 dark:text-slate-400">
            *Don’t worry we will not spam you :)
          </div>
        </div>
        <div>
          <img src="/images/svg/img-1.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="xl:fixed bottom-0 w-full">
      <div class="container">
        <div
          class="md:flex justify-between items-center flex-wrap space-y-4 py-6"
        >
          <div>
            <ul class="flex md:justify-start justify-center space-x-3">
              <li>
                <a href="#" class="social-link">
                  <Icon icon="icomoon-free:facebook"
                /></a>
              </li>
              <li>
                <a href="#" class="social-link">
                  <Icon icon="icomoon-free:twitter"
                /></a>
              </li>
              <li>
                <a href="#" class="social-link">
                  <Icon icon="icomoon-free:linkedin2"
                /></a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="flex md:justify-start justify-center space-x-3">
              <li>
                <a
                  href="#"
                  class="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >Privacy policy</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dark = ref(false);

useHead({
  title: "Easiest Way to Deploy WordPress",
  meta: [
    {
      name: "description",
      content:
        "Deploy WordPress quickly and simply with OrbitPanda. Our app streamlines the deployment process, allowing you to get your site up and running in seconds.",
    },
    {
      name: "keywords",
      content:
        "WordPress deployment, Fast deployment, Easy WordPress installation, WordPress site builder, WordPress management, WordPress automation",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://orbitpanda.com",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700&display=swap",
    },
  ],
  script: [
    {
      src: "https://www.google.com/recaptcha/api.js",
      async: true,
      defer: true,
    },
  ],
});
</script>

<style lang="scss" scoped>
.social-link {
  @apply h-8 w-8 flex flex-col items-center justify-center border-black-500 dark:border-slate-700 border rounded-full text-slate-900 dark:text-slate-300 leading-[1] hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-white transition duration-150;
}
</style>
