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
                  <a
                    href="javascript:void(0)"
                    @click="goLogin"
                    class="login-link"
                    >이미 계정이 있나요?</a
                  >
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
    ...mapActions(["setNotice"]),
    async onSubmit() {
      if (this.user.pw != this.user.pwConfirm) {
        this.setNotice({
          state: true,
          title: "잘못된 패스워드",
          body: "PW가 일치한지 다시 확인해주세요",
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
        return;
      }
      await this.signup({
        uname: this.user.uname,
        uid: this.user.id,
        pw: this.user.pw
      });
      if (this.getUser.isAuth === true) {
        this.setNotice({
          state: true,
          title: "회원가입 성공",
          body: "회원가입에 성공했습니다",
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
      } else {
        this.setNotice({
          state: true,
          title: "회원가입 실패",
          body: "회원가입에 실패했습니다 : " + this.getUser.authState,
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
      }
    },
    goLogin() {
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/sign/signup.scss";
</style>
