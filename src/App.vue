<script setup>
import ToolbarContent from "@/drinks/components/toolbar-content.vue";
import BodyContent from "@/drinks/components/body-content.vue";
import FooterContent from "@/drinks/components/footer-content.vue";
</script>

<template>
  <main>
    <toolbar-content></toolbar-content>
    <body-content></body-content>
    <footer-content></footer-content>
  </main>
</template>

<style>
@media only screen and (max-width: 600px) {
  .cards-content {
    grid-template-columns: 1fr;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .cards-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1025px) {
  .cards-content {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>