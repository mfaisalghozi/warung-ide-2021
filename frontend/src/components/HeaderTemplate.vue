<template>
  <div class="header-wrapper">
    <div class="logo-wrap">
      <img src="../assets/images/icon/light-bulb.png" alt="bright-lamp">
      <div class="text-image">
        WarungIde.co
      </div>
    </div>
    <div class="category-wrap">
      <a href="#home">Home</a>
      <a href="#discover">Discover</a>
      <a href="#aboutus">About Us</a>
    </div>
    <div class="button-wrap">
      <a class="button-register" href="#register">
        Register
      </a>
      <a class="button-login" href="#login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
export default {  
  name: "HeaderTemplate",
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap');

.header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  .logo-wrap {
    width: 15%;
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    .text-image {
      margin-left: .2rem;
      font-size: 1.4rem;
      font-family: 'Zen Antique Soft', serif;
    }
    img {
      height: 34px;
      width: 28px;
    }
  }

  .category-wrap {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: black;
      &:hover {
        color: pink;
      }
    }
  }

  .button-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 15%;
    margin-right: 2rem;

    a {
      text-decoration: none;
      color: black;
    }

    .button-login {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      margin-left: 1rem;
      width: 40%;
      height: 2rem;
      border-radius: 20px;
      &:hover {
        background-color: black;
        color: white;
      }
    }
    .button-register {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      margin-right: 1rem;
      width: 40%;
      height: 2rem;
      border-radius: 20px;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }

}
</style>