<template>
  <div class="feature-card-wrapper">
    <div class="content-image">
      image
    </div>
    <div class="content-info">
      <div class="content-title">
        Project Title here
      </div>
      <div class="content-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque id est fuga ducimus nesciunt, 
        ratione aperiam commodi rem architecto nihil?
      </div>
      <div class="content-addition">
        <div class="total-funded-label">
          Total Funded 87%
        </div>
        <div class="icon-label">
          <div class="icon-love">
            <a href="#addToLove">
              <img src="../../assets/images/icon/love.png" alt="love-icon">
            </a>
          </div>
          <div class="icon-bookmark">
            <a href="#addToBookmark">
              <img src="../../assets/images/icon/bookmark.svg" alt="bookmark-icon">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCardFeature'
}
</script>

<style lang="less" scoped>
.feature-card-wrapper {
  background-color: white;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  .content-image {
    border-top-left-radius: 29px;
    border-top-right-radius: 29px;
    height: 50%;
    background-color: salmon;
  }

  .content-info {
    padding: .5rem;

    .content-title {
      font-size: 30px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: black;
      text-align: left;
    }

    .content-description {
      margin: 1.4rem 0;
      width: 70%;
      font-size: 16px;
      text-align: left;
      color: rgba(0,0,0,0.8);
    }

    .content-addition { 
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .total-funded-label {
        color: green;
        font-weight: bold;
      }
      .icon-label {
        display: flex;
        
        .icon-bookmark, .icon-love {
          margin: 0 10px;
          a {
            text-decoration: none;
          }

          img {
            height: 24px;
            width: 24px;
          }
        }
      }
    }
  }
}
</style>