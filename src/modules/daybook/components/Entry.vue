<template>
  <div class="entry-container m-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10 } })">
    <div class="entry-tittle d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2024, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus dolor in condimentum accumsan. Pellentesque
      finibus quis nunc ut dictum.
    </div>
  </div>
</template>

<style lang="scss" scooped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>