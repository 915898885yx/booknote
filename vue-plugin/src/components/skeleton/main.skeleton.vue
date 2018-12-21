 <template>
  <div class="main-skeleton">
    <w-skeleton height="80px"></w-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <w-skeleton height="300px" width="100vw"></w-skeleton>
        </div>
        <w-skeleton height="45px" width="100vw"></w-skeleton>
      </div>
      <div class="skeleton-bottom">
        <w-skeleton height="45px" width="100vw"></w-skeleton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-skeleton{
  width:100vw;
  height: 100vh;
}
.skeleton-container .skeleton{
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
