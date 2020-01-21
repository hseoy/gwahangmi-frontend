<template>
  <div id="gwahangmiNotice" class="gwahangmi-notice">
    <div
      id="noticeBackground"
      class="notice-background"
      v-bind:style="{ height: computedHeight }"
      v-on:click="clickNoticeClose"
    ></div>
    <div
      id="noticeContent"
      class="notice-content"
      v-bind:style="{ display: computedDisplay }"
    >
      <button
        id="noticeClose"
        class="closebtn"
        type="button"
        v-on:click="clickNoticeClose"
      >
        &times;
      </button>

      <div class="notice-wrap">
        <div class="notice-title">
          <h1>{{ computedTitle }}</h1>
        </div>
        <div class="notice-body">
          <p>{{ computedBody }}</p>
        </div>
        <div class="notice-check">
          <button class="check-button" v-on:click="noticeCheck">
            {{ computedButton }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "gwahangmi-notice",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUser"]),
    ...mapGetters(["getNotice"]),
    ...mapGetters(["getPost"]),
    computedTitle() {
      return this.getNotice.title;
    },
    computedBody() {
      return this.getNotice.body;
    },
    computedButton() {
      return this.getNotice.button;
    },
    computedHeight() {
      return this.getNotice.style.height;
    },
    computedDisplay() {
      return this.getNotice.style.display;
    },
    getUID() {
      return this.getUser.uid;
    },
    getProfileChangeFormData() {
      return this.getUser.profileChange.formData;
    },
    getProfileChangeUname() {
      return this.getUser.profileChange.uname;
    },
    getPreCategory() {
      return this.getPost.pre.category;
    },
    getPreTitle() {
      return this.getPost.pre.title;
    },
    getPreContent() {
      return this.getPost.pre.content;
    }
  },
  methods: {
    ...mapActions(["setNotice"]),
    ...mapActions(["login"]),
    ...mapActions(["logout"]),
    ...mapActions(["userLeave"]),
    ...mapActions(["putUser"]),
    ...mapActions(["profilePut"]),
    ...mapActions(["postsPost"]),
    ...mapActions(["userHighRankTop3"]),
    ...mapActions(["usersGet"]),
    async noticeCheck() {
      if (
        this.computedTitle === "로그아웃" ||
        this.computedTitle === "탈퇴 성공"
      ) {
        this.logout();
        this.$router.push("/");
      } else if (
        this.computedTitle === "정보수정 성공" ||
        this.computedTitle === "로그인 성공" ||
        this.computedTitle === "회원가입 성공"
      ) {
        this.$router.push("/");
      } else if (this.computedTitle === "게스트로 로그인") {
        await this.login({ uid: "guest", pw: "guest" });
        if (this.getUser.isAuth === true) {
          this.$router.push({ name: "home" });
        }
      } else if (this.computedTitle === "나도 글쓰기!") {
        var res = await this.postsPost({
          author: this.getUID,
          category: this.getPreCategory,
          title: this.getPreTitle,
          content: this.getPreContent
        });
        if (res.isSuccess) {
          this.clickNoticeClose();
          this.setNotice({
            state: true,
            title: "업로드 성공",
            body: "글을 업로드하는 데 성공했습니다 +5",
            button: "확인",
            style: {
              height: "100%",
              display: "inline-block"
            }
          });
        } else {
          console.log(res);
          this.clickNoticeClose();
          this.setNotice({
            state: true,
            title: "업로드 실패",
            body: "글을 업로드하는 데 실패했습니다",
            button: "확인",
            style: {
              height: "100%",
              display: "inline-block"
            }
          });
        }
        res = await this.usersGet({
          limit: 3,
          point: true,
          post: false,
          sort: false
        });
        this.userHighRankTop3({ users: res.users });
        return;
      } else if (this.computedTitle === "회원탈퇴") {
        res = await this.userLeave({ uid: this.getUID });
        if (res.isSuccess) {
          this.clickNoticeClose();
          this.setNotice({
            state: true,
            title: "탈퇴 성공",
            body: "탈퇴하는 데 성공하였습니다",
            button: "확인",
            style: {
              height: "100%",
              display: "inline-block"
            }
          });
          return;
        } else {
          this.clickNoticeClose();
          this.setNotice({
            state: true,
            title: "탈퇴 실패",
            body: "탈퇴하는 데 실패하였습니다",
            button: "확인",
            style: {
              height: "100%",
              display: "inline-block"
            }
          });
          return;
        }
      } else if (this.computedTitle === "정보수정") {
        var res1;

        if (this.getProfileChangeFormData != "") {
          res1 = await this.profilePut({
            formData: this.getProfileChangeFormData
          });
        }
        var res2 = await this.putUser({
          uid: this.getUID,
          uname: this.getProfileChangeUname
        });

        if (
          (res1 === undefined && res2.isSuccess) ||
          (res1.isSuccess && res2.isSuccess)
        ) {
          this.clickNoticeClose();
          this.setNotice({
            state: true,
            title: "정보수정 성공",
            body: "정보수정에 성공하였습니다",
            button: "확인",
            style: {
              height: "100%",
              display: "inline-block"
            }
          });
          return;
        } else if (res1 != undefined && !res1.isSuccess && res2.isSuccess) {
          this.clickNoticeClose();
          this.setNotice({
            state: true,
            title: "정보수정 실패",
            body: "프로필 이미지 수정에 실패하였습니다",
            button: "확인",
            style: {
              height: "100%",
              display: "inline-block"
            }
          });
          return;
        } else if (res1 != undefined && res1.isSuccess && !res2.isSuccess) {
          this.clickNoticeClose();
          this.setNotice({
            state: true,
            title: "정보수정 실패",
            body: "사용자 이름 수정에 실패하였습니다",
            button: "확인",
            style: {
              height: "100%",
              display: "inline-block"
            }
          });
          return;
        } else if (
          (res1 === undefined && !res2.isSuccess) ||
          (!res1.isSuccess && !res2.isSuccess)
        ) {
          this.clickNoticeClose();
          this.setNotice({
            state: true,
            title: "정보수정 실패",
            body: "정보 수정에 실패하였습니다",
            button: "확인",
            style: {
              height: "100%",
              display: "inline-block"
            }
          });
          return;
        }
      }
      this.clickNoticeClose();
    },
    clickNoticeClose() {
      this.setNotice({
        state: "",
        title: "",
        body: "",
        button: "",
        style: {
          height: "0%",
          display: "none"
        }
      });
      this.$emit("click-notice-close");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/notice/notice.scss";
</style>
