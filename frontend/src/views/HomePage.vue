<template>
  <div class="home-wrapper">
    <div class="section">
      <div class="feature-section">
        <div class="project-feature-list">
          <ProjectListFeature />
          <ProjectListFeature />
          <ProjectListFeature />
        </div>
        <div class="project-feature-card">
          <router-link to="/projectDetail">
            <ProjectCardFeature />
          </router-link>
        </div>
      </div>
      <div class="popular-secttion">
        popular section
      </div>
    </div>
  </div>
</template>

<script>
// Component
import ProjectCardFeature from '../components/cardComponent/ProjectCardFeature.vue'
import ProjectListFeature from '../components/cardComponent/ProjectListFeature.vue'


export default {
  name: "HomePage",
  components: {
    ProjectCardFeature,
    ProjectListFeature,
  }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  height: 100vh;
  .section {
    padding: 0 4rem;

    .feature-section {
      width: 100%;
      height: 50vh;
      display: flex;
      flex-direction: row;

      .project-feature-card {
        width: 100%;
        padding: 2rem;
        a {
          text-decoration: none;
        }
      }

      .project-feature-list {
        width: 100%;
      }
    }
  }
}
</style>>