<template>
  <div id="signup">
    <div class="signup-wrap">
      <div class="outter">
        <div class="inner">
          <div class="signup-container">
            <div class="signup-title-wrap">
              <h1 class="signup-title">과학미科學美</h1>
            </div>
            <div class="signup-box-wrap">
              <div class="signup-box uname">
                <div class="box-title-wrap">
                  <div class="outter">
                    <div class="inner">
                      <h2 class="box-title">
                        NAME
                      </h2>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  v-model="user.uname"
                  class="signup-input"
                  title="이름을 입력해주세요"
                  autocomplete="off"
                  placeholder="이름을 입력해주세요"
                />
              </div>
              <div class="signup-box id">
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
                  class="signup-input"
                  title="ID를 입력해주세요"
                  autocomplete="off"
                  placeholder="ID를 입력해주세요"
                />
              </div>
              <div class="signup-box pw">
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
                  class="signup-input"
                  title="PW를 입력해주세요"
                  autocomplete="off"
                  placeholder="PW를 입력해주세요"
                />
              </div>
              <div class="signup-box pw-confirm">
                <div class="box-title-wrap">
                  <div class="outter">
                    <div class="inner">
                      <h2 class="box-title">PW확인</h2>
                    </div>
                  </div>
                </div>
                <input
                  type="password"
                  v-model="user.pwConfirm"
                  class="signup-input"
                  title="PW를 다시 입력해주세요"
                  autocomplete="off"
                  placeholder="PW를 다시 입력해주세요"
                />
              </div>
              <div class="signup-box button">
                <button class="signup-button" v-on:click="onSubmit">
                  회원가입
                </button>
              </div>
              <div class="signup-login-wrap">
                <div class="signup-login-container">
                  <a href="/login" class="login-link">이미 계정이 있나요?</a>
                </div>
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
        uname: "",
        id: "",
        pw: "",
        pwConfirm: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    ...mapActions(["signup"]),
    async onSubmit() {
      if (this.user.pw != this.user.pwConfirm) {
        console.log("패스워드 일치하지 않음");
        return;
      }
      await this.signup({
        uname: this.user.uname,
        uid: this.user.id,
        pw: this.user.pw
      });
      console.log(this.getUser);
      if (this.getUser.isAuth === true) {
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>

<style lang="scss">
#signup {
  .signup-wrap {
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

    .signup-container {
      width: 60%;
      display: inline-block;

      .signup-title-wrap {
        .signup-title {
          font-family: $font-accent;
          color: $color-accent;
          font-size: 50px;
          margin-bottom: 30px;
        }
      }

      .signup-box-wrap {
        padding: 30px 0;
        .signup-box {
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
            width: 100px;
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

          .signup-input {
            display: block;
            margin-right: 20px;
            width: calc(100% - 160px);
            margin-left: 140px;
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
      .signup-login-wrap {
        .signup-login-container {
          text-align: right;
          width: 400px;
          margin: 0 auto;

          .login-link {
            font-family: $font-accent;
            color: $color-accent;
            background-color: $color-primary;
            border: 3px solid $color-accent;
            border-radius: 20px;
            padding: 0 10px;
            transition: 0.15s;

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
