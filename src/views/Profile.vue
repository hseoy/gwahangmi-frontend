<template>
  <div id="profile">
    <div class="profile-wrap">
      <div class="outter">
        <div class="inner">
          <div class="profile-container">
            <div class="profile-title-wrap">
              <h1 class="profile-title">과학미科學美</h1>
            </div>
            <div class="profile-box-wrap">
              <div class="profile-box profileimg">
                <div class="box-title-wrap">
                  <div class="outter">
                    <div class="inner">
                      <div class="profile-img-preview">
                        <img
                          :src="getUploadProfileImage"
                          height="100%"
                          width="100%"
                          alt="Profile Image Preview"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <span>
                  <Button class="profile-input show-button-file"
                    >프로필 이미지 수정</Button
                  >
                  <input
                    type="file"
                    @change="onFileSelected"
                    class="profile-input hidden"
                    ref="profileImgFile"
                    multiple="multiple"
                    name="profileImg"
                    id="profileImg"
                    accept="image/*"
                  />
                </span>
              </div>
              <div class="profile-box point readonly">
                <div class="box-title-wrap">
                  <div class="outter">
                    <div class="inner">
                      <h2 class="box-title">
                        POINT
                      </h2>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  class="profile-input"
                  :title="getUserPoint"
                  :value="getUserPoint"
                  readonly
                />
              </div>
              <div class="profile-box uname">
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
                  class="profile-input"
                  :title="user.name"
                  v-model="user.name"
                />
              </div>
              <div class="profile-box id readonly">
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
                  class="profile-input"
                  :title="getUID"
                  :value="getUID"
                  readonly
                />
              </div>
              <div class="profile-box pw-confirm">
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
                  class="profile-input"
                  title="PW를 입력해주세요"
                  autocomplete="off"
                  placeholder="PW를 입력해주세요"
                />
              </div>
              <div class="profile-box button">
                <button class="profile-button" @click="onInfoChangeSubmit">
                  정보 수정
                </button>
              </div>
              <div class="profile-box button">
                <button class="profile-button" @click="onLogout">
                  로그아웃
                </button>
              </div>
              <div class="profile-box button">
                <button class="profile-button" @click="onUserLeave">
                  회원탈퇴
                </button>
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
  name: "profile",
  components: {},
  data() {
    return {
      user: {
        name: "",
        pw: ""
      },
      uploadProfileImage: "",
      profileImg: ""
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $router: "fetchData"
  },
  computed: {
    ...mapGetters(["getUser"]),
    getUID() {
      return this.getUser.uid;
    },
    getUname() {
      return this.getUser.uname;
    },
    getUserPoint() {
      if (this.getUser.point <= 20) {
        return this.getUser.point + " - Rank:과";
      } else if (this.getUser.point <= 40) {
        return this.getUser.point + " - Rank:학";
      }
      return this.getUser.point + " - Rank:미";
    },
    getUploadProfileImage() {
      if (
        this.uploadProfileImage === "" &&
        this.getUser.profileImg != "profile_default_gwahangmi.jpg"
      ) {
        const res = this.profileGetFile({ uid: this.getUID });
        this.promiseProfileImgFileData(res);
      } else if (this.uploadProfileImage === "") {
        return "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008";
      }
      return this.uploadProfileImage;
    }
  },
  methods: {
    ...mapActions(["profileGetFile"]),
    ...mapActions(["logout"]),
    ...mapActions(["auth"]),
    ...mapActions(["putUser"]),
    ...mapActions(["profilePut"]),
    ...mapActions(["setNotice"]),
    ...mapActions(["preProfileChange"]),
    ...mapActions(["getUserInfo"]),
    async promiseProfileImgFileData(p) {
      await p.then(v => {
        this.uploadProfileImage = v;
      });
    },
    async fetchData() {
      if (this.getUser.profileImg != "profile_default_gwahangmi.jpg") {
        const res = await this.profileGetFile({ uid: this.getUID });
        this.profileImgFile = res;
      } else {
        this.profileImgFile =
          "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/p960x960/69894151_376374273281275_8676602144360497152_o.jpg?_nc_cat=111&_nc_ohc=YR94sK98E_oAQn_OfCxwcNEXMdp15IwHkHXTHCji96X48vHBFFf2R5kfg&_nc_ht=scontent-lax3-2.xx&oh=d25ff31a79d60fd75ffa83851098f98c&oe=5E9B3008";
      }
      await this.getUserInfo({ uid: this.getUID });
      this.user.name = this.getUname;
    },
    onFileSelected(event) {
      this.profileImg = this.$refs.profileImgFile.files[0];
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.uploadProfileImage = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    onLogout() {
      this.setNotice({
        state: true,
        title: "로그아웃",
        body: "로그아웃합니다",
        button: "확인",
        style: {
          height: "100%",
          display: "inline-block"
        }
      });
    },
    async onInfoChangeSubmit() {
      this.profileImg = this.$refs.profileImgFile.files[0];
      var isAuth = await this.auth({ uid: this.getUID, pw: this.user.pw });
      if (isAuth) {
        const formData = new FormData();
        if (this.$refs.profileImgFile.files.length > 0) {
          formData.append("uid", this.getUID);
          formData.append("profileImg", this.profileImg, this.profileImg.name);
          this.preProfileChange({ formData: formData, uname: this.user.name });
        } else {
          this.preProfileChange({ formData: "", uname: this.user.name });
        }
        this.setNotice({
          state: true,
          title: "정보수정",
          body: "프로필 정보를 수정합니다",
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
      } else {
        this.setNotice({
          state: true,
          title: "인증 실패",
          body: "PW가 잘못되었습니다",
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
      }
    },
    async onUserLeave() {
      var isAuth = await this.auth({ uid: this.getUID, pw: this.user.pw });
      if (isAuth) {
        if (this.getUID === "guest") {
          this.setNotice({
            state: true,
            title: "탈퇴 실패",
            body: "게스트 계정은 탈퇴할 수 없습니다",
            button: "확인",
            style: {
              height: "100%",
              display: "inline-block"
            }
          });
          return;
        }
        this.setNotice({
          state: true,
          title: "회원탈퇴",
          body: "과학미의 계정을 삭제합니다",
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
      } else {
        this.setNotice({
          state: true,
          title: "인증 실패",
          body: "PW가 잘못되었습니다",
          button: "확인",
          style: {
            height: "100%",
            display: "inline-block"
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/profile/profile.scss";
</style>
