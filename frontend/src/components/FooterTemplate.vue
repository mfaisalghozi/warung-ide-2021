<template>
  <div class="footer-wrapper">
    <div class="text-question">
      Have a question about our app ?
      let us help you!
    </div>
    <div class="field-email">
      <form>
        <input type="text" placeholder="your question"/>
        <button>Send</button>
      </form>
    </div>
    <div class="info-app">
      <div class="logo-image">
        <img src="../assets/images/icon/light-bulb.png" alt="bright-lamp">
        <div class="text-image">WarungIde.co</div>
      </div>
      <div class="logo-socmed">
        <a href="#twitter">
          <img src="../assets/images/icon/twitter.svg" alt="twitter-icon">
        </a>
        <a href="#instagram">
          <img src="../assets/images/icon/instagram.svg" alt="instagram-icon">
        </a>
        <a href="#facebook">
          <img src="../assets/images/icon/facebook.svg" alt="facebook-icon">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterTemplate",
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Zen+Antique+Soft&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap');

.footer-wrapper {
  background-color: #DFDFDF;
  display: flex; 
  flex-direction: column;
  height: 20rem;
  justify-content: center;
  align-items: center;

  .text-question {
    font-family: 'Inter', sans-serif;
    font-family: 'Zen Antique Soft', serif; 
    font-size: 48px;
    font-style: italic;
    width: 40%;
  }

  .field-email {
    margin: 2rem 0;
    input {
      width: 300px;
      height: 46px;
      margin-right: 1rem;
      border-radius: 20px;
      text-align: center;
    }
    button {
      margin-left: 1rem;
      border-radius: 10px;
      width: 136px;
      height: 48px;

      &:hover{
        background-color: #D8F2FF;
        color: #F57F73;
      }
    }
  }

  .info-app {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    .logo-image {
      margin-left: 3rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      
      .text-image {
        margin-left: .3rem;
        font-size: 1.2rem;
        font-family: 'Zen Antique Soft', serif;
      }

      img {
        height: 34px;
        width: 28px;
      }
    }

    .logo-socmed {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-right: 3rem;
      width: 10%;
    }
  }
}
</style>