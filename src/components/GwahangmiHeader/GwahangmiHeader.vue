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
        <a class="sign-in" href="/login">
          로그인
        </a>
        <a class="sign-up" href="/signup">
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
@import "@/styles/gwahangmi/header/header.scss";
</style>
