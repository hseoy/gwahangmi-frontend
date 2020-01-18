<template>
  <div id="login">
    <div class="login-wrap">
      <div class="outter">
        <div class="inner">
          <div class="login-container">
            <div class="login-title-wrap">
              <h1 class="login-title">과학미科學美</h1>
            </div>
            <div class="login-box-wrap">
              <div class="login-box id">
                <div class="box-title-wrap">
                  <div class="outter">
                    <div class="inner">
                      <h2 class="box-title">
                        ID
                      </h2>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  v-model="user.id"
                  class="login-input"
                  title="ID를 입력해주세요"
                  autocomplete="off"
                  placeholder="ID를 입력해주세요"
                />
              </div>
              <div class="login-box pw">
                <div class="box-title-wrap">
                  <div class="outter">
                    <div class="inner">
                      <h2 class="box-title">PW</h2>
                    </div>
                  </div>
                </div>
                <input
                  type="password"
                  v-model="user.pw"
                  class="login-input"
                  title="PW를 입력해주세요"
                  autocomplete="off"
                  placeholder="PW를 입력해주세요"
                />
              </div>
              <div class="login-box button">
                <button class="login-button" v-on:click="onSubmit">
                  로그인
                </button>
              </div>
            </div>
            <div class="login-signup-wrap">
              <div class="login-signup-container">
                <button class="guest-login" v-on:click="guestLogin">
                  게스트로 로그인
                </button>
                <a href="/signup" class="signup-link">계정이 없나요?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        id: "",
        pw: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    ...mapActions(["login"]),
    async onSubmit() {
      await this.login({ uid: this.user.id, pw: this.user.pw });
      if (this.getUser.isAuth === true) {
        this.$router.push({ name: "home" });
      }
    },
    async guestLogin() {
      await this.login({ uid: "testId", pw: "testPw" });
      if (this.getUser.isAuth === true) {
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>

<style lang="scss">
#login {
  .login-wrap {
    width: 100%;
    height: 100vh;
    text-align: center;
    background-color: $color-primary;
    position: relative;

    .outter {
      display: table;
      width: 100%;
      height: 100%;

      .inner {
        display: table-cell;
        vertical-align: middle;
      }
    }

    .login-container {
      width: 60%;
      display: inline-block;

      .login-title-wrap {
        .login-title {
          font-family: $font-accent;
          color: $color-accent;
          font-size: 50px;
          margin-bottom: 30px;
        }
      }

      .login-box-wrap {
        padding: 30px 0;
        .login-box {
          background-color: $color-white;
          width: 400px;
          height: 50px;
          margin: 30px auto;
          position: relative;
          font-family: $font-accent;
          &:first-child {
            margin-top: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
          .box-title-wrap {
            width: 50px;
            height: 100%;
            float: left;
            margin: 0 20px;

            .box-title {
              font-size: 20px;
              text-align: left;

              &::after {
                content: " :";
              }
            }
          }

          .login-input {
            display: block;
            margin-left: 90px;
            margin-right: 20px;
            width: calc(100% - 110px);
            height: 100%;
            font-family: $font-accent;
            border: none;
            outline: none;
            font-size: 18px;

            &::placeholder {
              color: lighten($color-accent, 80%);
            }

            &:focus::-webkit-input-placeholder {
              color: transparent;
              vertical-align: middle;
            }

            &:focus:-moz-placeholder {
              color: transparent;
              vertical-align: middle;
            }

            &:focus::-moz-input-placeholder {
              color: transparent;
              vertical-align: middle;
            }

            &:focus::-ms-input-placeholder {
              color: transparent;
              vertical-align: middle;
            }
          }

          &.button {
            background-color: $color-accent;
            button {
              width: 100%;
              height: 100%;
              background-color: $color-accent;
              font-size: 20px;
              font-family: $font-accent;
              color: $color-white;
            }
          }
        }
      }
      .login-signup-wrap {
        .login-signup-container {
          text-align: right;
          width: 400px;
          margin: 0 auto;

          .guest-login {
            float: left;
            font-size: 16px;
          }

          .signup-link,
          .guest-login {
            font-family: $font-accent;
            color: $color-accent;
            background-color: $color-primary;
            border: 3px solid $color-accent;
            border-radius: 20px;
            padding: 0 10px;
            transition: 0.15s;
            font-size: 16px;

            &:hover {
              background-color: $color-accent;
              color: $color-primary;
            }
          }
        }
      }
    }
  }
}
</style>
