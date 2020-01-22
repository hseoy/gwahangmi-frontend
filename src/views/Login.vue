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
                <a
                  href="javascript:void(0)"
                  @click="goSignup"
                  class="signup-link"
                  >계정이 없나요?</a
                >
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
    ...mapActions(["setNotice"]),
    async onSubmit() {
      if (this.user.id === "guest") {
        this.guestLogin();
        return;
      }
      await this.login({ uid: this.user.id, pw: this.user.pw });
      if (this.getUser.isAuth === true) {
        this.setNotice({
          state: true,
          title: "로그인 성공",
          body: "로그인에 성공하였습니다",
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
      } else {
        this.setNotice({
          state: true,
          title: "로그인 실패",
          body: "로그인에 실패하였습니다 : " + this.getUser.authState,
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
      }
    },
    async guestLogin() {
      this.setNotice({
        state: true,
        title: "게스트로 로그인",
        body:
          "게스트 계정으로 로그인합니다. 이 계정은 모든 사람이 함께 사용합니다.",
        button: "확인",
        style: {
          height: "100%",
          display: "inline-block"
        }
      });
    },
    goSignup() {
      this.$router.push("signup");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/sign/login.scss";
</style>
