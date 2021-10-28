<template>
  <div class="project-list-wrapper">
    <div class="card-list">
      <div class="list-image">
        image
      </div>
      <div class="list-content">
        <div class="content-title">
          Project Title Here
        </div>
        <div class="content-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, reprehenderit.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectListFeature',
}
</script>

<style lang="less" scoped>
.project-list-wrapper {
  padding: .9rem;
  margin: 20px 0;

  .card-list {
    border-radius: 30px;
    width: 100%;
    height: 6rem;  
    background-color: rgba(0,0,0,.2);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    display: flex;
    flex-direction: row;
    
    .list-image {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      background-color: red;
      width: 40%;
    }

    .list-content {
      text-align: left;
      padding: .5rem;

      .content-title {
        font-weight: bold;
      }

      .content-description {
        font-weight: lighter;
        margin-top: .2rem;
      }
    }
  }
}
</style>