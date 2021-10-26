<template>
  <div class="landingPageWrapper">
    <div class="section first-section">
      <div class="text-info">
        <h1>WarungIde</h1>
        <h3>Share your idea to the world</h3>
      </div>
      <div class="image-info">
        <img src="../assets/images/section2.jpg" alt="image-section-one">
      </div>
    </div>
    <div class="section second-section">
      <div class="image-info">
        <img src="../assets/images/section2.jpg" alt="image-section-two">
      </div>
      <div class="text-info">
        <h1>Our Mission</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla corrupti assumenda ex iusto ullam, sunt eos molestias quo dignissimos!</h3>
      </div>
    </div>
    <div class="section third-section">
      <div class="text-info">
        <h1>Our Vision</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores eos ratione excepturi, repellat quia assumenda qui consectetur eius consequuntur!</h3>
      </div>
      <div class="image-info">
        <img src="../assets/images/section3.jpg" alt="image-section-three">
      </div>
    </div>
    <div class="section four-section">
      <div class="image-info">
        <img src="../assets/images/section3.jpg" alt="image-section-four">
      </div>
      <div class="text-info">
        <h1>Our Ideas</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur quam veniam reprehenderit, voluptatem optio odio a omnis unde cumque!</h3>
      </div>
    </div>
    <div class="team-section">
      <h1 class="team-title">Our Team</h1>
      <div class="member-section">
        <div class="member">
          <div class="member-image">
            image
          </div>
          <div class="member-name">
            Andi
          </div>
        </div>
        <div class="member">
          <div class="member-image">
            <p>image</p>
          </div>
          <div class="member-name">
            Frank
          </div>
        </div>
        <div class="member">
          <div class="member-image">
            <p>image</p>
          </div>
          <div class="member-name">
            Ibas
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style lang="less" scoped>
.landingPageWrapper {

  .section {
    height: 95vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .image-info {
      img {
        border-radius: 20px;
        width: 25rem;
        height: 25rem;
      }
    }
  }

  .first-section, .third-section, .team-section {
    background-color: #D8F2FF;
  }

  .second-section, 
  .third-section, 
  .four-section {
    .text-info {
      width: 35rem;
    }
  }

  .team-section {
    height: 90vh;
    h1 {
      font-size: 4rem;
    }
    .member-section {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      
      .member {
        .member-image {
          background-color: grey;
          width: 100%;
          p {
            padding: 0;
            margin: 0;
          }
        }
        background-color: salmon;
        margin: 0 20px;
        width: 20rem;
        height:  20rem;
        
      }
    }

  }
}
</style>>