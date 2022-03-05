<template>
  <div class="layer-bg" :style="{
    display: visible ? 'block' : 'none'
  }"></div>
  <div class="popup" :style="{
    display: visible ? 'block' : 'none'
  }"
  >
    <div class="popup-content">
      <div class="pp-close" @click="hidePopup"><i class="icofont-close-line-circled"></i></div>
      <div class="pp-title">Заказать звонок</div>
      <div class="pp-form">
        <form :action="action" method="post" class="ordercall" @submit="sendForm">
          <input type="text" name="email" ref="popupEmail" class="honey" />
          <div class="row-fields">
            <div class="row-label">Ваше имя</div>
            <div class="row-field">
              <input type="text" ref="popupName" name="name" />
            </div>
          </div>
          <div class="row-fields">
            <div class="row-label">Номер телефона</div>
            <div class="row-field">
              <input type="text" ref="popupPhone" name="phone" class="phone" />
            </div>
          </div>
          <div class="row-fields">
            <div class="pol" v-html="privacyText"></div>
          </div>
          <div class="row-fields">
            <div class="row-field">
              <input type="submit" class="btn-site" name="submit" value="Отправить" />
            </div>
          </div>
          <div class="success-send">Ваша заявка успешно отправлена.</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PopupWindow',
  props: {
    action: {
      type: String,
    },
  },
  computed: {
    ...mapGetters({
      visible: 'popup/visibility',
    }),
  },
  methods: {
    hidePopup() {
      this.setVisibility(false);
    },
    ...mapActions({
      setVisibility: 'popup/setVisible',
    }),
  },
};
</script>
