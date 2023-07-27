<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoutes } from '../../hooks';
import { setLanguage, Typelanguage } from '../../locales';
import { useStore } from '../../store';
import { loginApi } from './../../apis';
const { locale } = useI18n();
let { router, params } = useRoutes();
let store = useStore();
const onLogin = async () => {
  const userInfo = await loginApi({ phone: '17621222222', code: '12355' });
  store.dispatch('user/updateUserInfo', userInfo);
  router.push(params.redirect ? params.redirect : '/home');
};
const changeLanguage = (lang: Typelanguage) => {
  locale.value = lang;
  setLanguage(lang);
};
const changeTheme = (theme: string) => {
  store.dispatch('theme/update', theme);
};
</script>

<template>
  <van-space direction="vertical" fill style="padding: 10px">
    <van-tag type="success" plain>多语言</van-tag>
    <van-space>
      <van-button type="primary" @click="changeLanguage('zh-CN')">
        中文
      </van-button>
      <van-button type="primary" @click="changeLanguage('en-US')">
        英文
      </van-button>
      <van-button type="primary" @click="onLogin">
        {{ $t('login.login') }}
      </van-button>
    </van-space>
    <van-divider />
    <van-tag type="success" plain>主题</van-tag>
    <van-space>
      <van-button type="primary" @click="changeTheme('light')">雅白</van-button>
      <van-button type="primary" @click="changeTheme('dark')">暗黑</van-button>
      <van-button type="primary" @click="changeTheme('system')">
        跟随系统
      </van-button>
      <div class="theme">theme-{{ store.state.theme.mode }}</div>
    </van-space>
    <van-divider />
    <van-tag type="success" plain>svgIcon</van-tag>
    <van-space>
      <SvgIcon name="vue" :size="50"></SvgIcon>
      <SvgIcon name="social-wechat" color="red" :size="[50, 50]"></SvgIcon>
    </van-space>
  </van-space>
</template>
<style scoped lang="scss">
.theme {
  background: var(--theme-bg-color);
  color: var(--theme-text-color);
}
</style>
