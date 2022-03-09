<template>
  <div class="layer-bg animate__fadeIn" v-if="visible"></div>
  <div class="popup animate__fadeIn" v-if="visible">
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
import 'animate.css';
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

<style>
.fade-enter-active {
  animation: fade-in .5s;
}
.fade-leave-active {
  animation: fade-in .5s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    display: none
  }
  50% {
    opacity: .5
  }
  100% {
    opacity: 1;
    display: block
  }
}
</style>
