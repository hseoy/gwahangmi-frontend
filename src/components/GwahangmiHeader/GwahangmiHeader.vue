<template>
  <div id="gwahangmiHeader">
    <div class="wrapper">
      <hgroup>
        <h1 class="gwahangmi-title">
          <a href="#">과학미科學美</a>
        </h1>
        <h2 class="gwahangmi-subtitle">
          과학의 아름다움을 나누는 커뮤니티
        </h2>
      </hgroup>

      <div class="sign-wrap">
        <a class="sign-in" href="#">
          로그인
        </a>
        <a class="sign-up" href="#">
          회원가입
        </a>
      </div>

      <nav class="gnb-wrap">
        <div class="gnb">
          <div class="item-wrap">
            <a class="gnb-item" href="javascript:void(0)">카테고리</a>
            <div class="subitem-wrap">
              <a class="gnb-subitem" href="#">물리학</a>
              <a class="gnb-subitem" href="#">화학</a>
              <a class="gnb-subitem" href="#">지구과학</a>
              <a class="gnb-subitem" href="#">생물학</a>
            </div>
          </div>
          <div class="item-wrap">
            <a class="gnb-item" href="#">과학순위</a>
          </div>
          <div class="item-wrap">
            <a class="gnb-item" href="#">과학퀴즈</a>
          </div>
          <div class="item-wrap">
            <a class="gnb-item" href="#">과학토론</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
#gwahangmiHeader {
  background-color: $color-primary;
  font-family: $font-accent;
  text-align: center;

  a {
    color: $color-accent;
  }

  .wrapper {
    width: 80%;
    padding-top: 80px;
    margin: 0 auto;

    hgroup {
      display: block;
      position: relative;
      margin-bottom: 60px;

      .gwahangmi-title {
        display: block;
        font-size: 38px;
        letter-spacing: 20px;
        padding-left: 20px;
        margin-bottom: 5px;
      }
      .gwahangmi-subtitle {
        display: block;
        font-size: 20px;
        letter-spacing: 1.25px;
        padding-left: 1.25px;
      }
      &:after {
        content: "";
        width: 350px;
        margin-left: -175px;
        height: 3px;
        background-color: $color-accent;
        position: absolute;
        bottom: -10px;
      }
    }

    .sign-wrap {
      display: inline-block;
      position: absolute;
      margin: 10px;
      top: 0;
      right: 0;

      .sign-in,
      .sign-up {
        transition: 0.12s;
        background-color: $color-primary;
        border: 3px solid $color-accent;
        border-radius: 3px;
        width: 90px;
        padding: 8px 0px;
        display: inline-block;

        &:hover {
          background-color: $color-accent;
          color: $color-primary;
        }
      }

      .sign-in {
        margin-right: 10px;
      }
    }

    .gnb-wrap {
      display: block;
      padding: 10px 0px;

      .gnb {
        padding: 20px;

        .item-wrap {
          display: inline-block;
          position: relative;
          margin: 0 50px;
          height: 35px;
          width: 120px;

          &:hover {
            .subitem-wrap {
              display: block;
              animation: slideTopToBottom;
              animation-duration: 1s;
              animation-fill-mode: forwards;
            }
            .gnb-item {
              border-bottom: 3px solid $color-accent;
            }
          }

          .gnb-item {
            transition: 0.12s;
            font-size: 20px;
            display: inline-block;
            height: 35px;
            line-height: 35px;
            width: 120px;
          }

          .subitem-wrap {
            overflow: hidden;
            position: absolute;
            background-color: $color-primary;
            display: none;
            left: 0;
            height: 0;
            width: 300px;
            margin-left: -90px;
            border: 3px solid $color-accent;

            .gnb-subitem {
              transition: 0.12s;
              display: block;
              height: 50px;
              line-height: 50px;

              &:hover {
                background-color: $color-accent;
                color: $color-primary;
              }
            }

            .gnb-subitem:not(:last-child) {
              border-bottom: 2px solid $color-accent;
            }
          }
        }
      }
    }
  }
}
@keyframes slideTopToBottom {
  from {
    height: 0px;
  }

  to {
    height: 206px;
  }
}
@import "@/styles/gwahangmi/header/header.scss";
</style>
