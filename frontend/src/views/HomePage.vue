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
      <div class="popular-section">
        <div class="section-title">
          Popular Project
        </div>
        <div v-if="isPopularContentMore" class="section-content-more">
            Content is popular is more
        </div>
        <div v-else class="section-content">
          <ProjectMainCard />
          <ProjectMainCard />
        </div>
      </div>
      <div class="most-funding-section">
        <div class="section-title">
          Most Funding Project
        </div>
        <div class="section-content">
          <ProjectMainCard />
          <ProjectMainCard />
        </div>
      </div>
      <div class="article-section">
        <div class="section-title">
           Article and News
        </div>
        <div class="section-content">
          <ArticleCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Component
import ProjectCardFeature from '../components/cardComponent/ProjectCardFeature.vue'
import ProjectListFeature from '../components/cardComponent/ProjectListFeature.vue'
import ProjectMainCard from '../components/cardComponent/ProjectCardMain.vue'
import ArticleCard from '../components/cardComponent/ArticleCard.vue'

// Utils
import { Carousel, Slide } from 'vue-carousel'


export default {
  name: "HomePage",
  components: {
    ProjectCardFeature,
    ProjectListFeature,
    ProjectMainCard,
    ArticleCard,
    Carousel,
    Slide,
  },
  data: () => {
    return {
      isPopularContentMore: false,
    }
  }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;

  .section {
    padding: 0 4rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .feature-section {
      width: 100%;
      height: 50vh;
      display: flex;
      flex-direction: row;
      margin-top: 2rem;
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

    .popular-section {
      margin: 20px 0;
    }

    .popular-section, .most-funding-section {
      height: 70vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .section-title {
        height: 10%;
        text-align: left;
        font-size: 48px;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-left: 1.2rem;
      }

      .section-content {
        display: flex;
        flex-direction: row;
        height: 70%;
        align-items: center;
      }
    }

    .article-section {
      height: 70vh;
      width: 100%;
      background-color: pink;

      .section-title {
        height: 10%;
        text-align: left;
        font-size: 48px;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-left: 1.2rem;
      }
    }
  }
}
</style>>