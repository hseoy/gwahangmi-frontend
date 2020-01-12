<template>
  <div id="TodayQuize">
    <h2 class="title-wrap">
      <span class="title">
        오늘의 퀴즈
      </span>
      <span>
        |
      </span>
      <span class="sub-title">
        과학미를 높여줄 오늘의 퀴즈
      </span>
    </h2>

    <div class="quize-wrap">
      <div class="quize-content-wrap">
        <div class="quize-user">USER-ID</div>
        <div class="quize-content">
          <div class="quize-title">
            만유인력의 법칙을 발견한 과학자는 누구일까요?
          </div>
          <div class="quize-answers">
            <div class="quize-answer">
              <div class="outter">
                <div class="inner">
                  뉴턴
                </div>
              </div>
            </div>
            <div class="quize-answer">
              <div class="outter">
                <div class="inner">
                  스티브잡스
                </div>
              </div>
            </div>
            <div class="quize-answer">
              <div class="outter">
                <div class="inner">
                  유재석
                </div>
              </div>
            </div>
            <div class="quize-answer">
              <div class="outter">
                <div class="inner">
                  헬렌 켈러
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
export default {
  name: "TodayQuize"
};
</script>

<style lang="scss">
@import "@/styles/gwahangmi/quize/today-quize.scss";
</style>
