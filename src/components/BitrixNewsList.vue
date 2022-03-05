<template>
  <div class="bitrix-news-list">
    <component v-for="(item, idx) of arResult.ITEMS" :key="idx" :data="item" :is="template"
       :arParams="arParams"
       :arResult="arResult"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script>
export default {
  name: 'BitrixNewsList',
  props: {
    template: {
      type: String,
    },
    arParams: {
      type: Object,
      required: false,
    },
    arResult: {
      type: Object,
      required: true,
    },
  },
};
</script>
