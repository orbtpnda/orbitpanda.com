<template>
  <div class="bg-white flex items-center px-3 rounded">
    <input
      type="email"
      placeholder="Enter your email"
      v-model="formData.email"
      class="flex-1 bg-transparent h-full block w-full py-6 placeholder:text-secondary-500 text-base focus:outline-none focus:ring-0"
    />
    <div class="flex-none">
      <button @click="onSubmit" type="button" class="btn btn-dark btn-sm px-6">
        Notify me
      </button>
    </div>
  </div>
</template>

<script setup>
const { $toast } = useNuxtApp();

const formData = ref({});

const url =
  "https://script.google.com/macros/s/AKfycbxl6iWCmXyt215l-rp3MLJM4ZvJ69llIAuw_KNoqTaXrXiByAFEAJvwi56E_FAjDsYf-w/exec";

const onSubmit = async () => {
  if (!formData.value.email) {
    $toast.error("Please provide us email address");
    return false;
  }
  try {
    await $fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData.value),
    });
    $toast.success("Your request has been submited");
  } catch (error) {
    $toast.error("Something error. please check your input");
  }

  formData.value.email = "";
};
</script>
