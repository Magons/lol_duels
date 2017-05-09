<template>
  <div class="modal-talants  modal-talants--active" v-if="show">
    <button class="close-btn" @click="close()">Close</button>
    <h1 class="modal-talants__header">Таланты</h1>
    <div class="modal-talants__wrap">
      <div class="modal-talants__user">tankop</div>
      <div class="modal-talants__points">
        <p class="modal-talants__points-title">Доступно очков:</p>
        <p class="modal-talants__points-available">0</p>
      </div>
      <div class="modal-talants__btns">
        <button class="modal-talants__add-btn"></button>
        <button class="modal-talants__del-btn"></button>
        <button class="modal-talants__rem-btn"></button>
      </div>
       <button class="modal-talants__save-btn">Сохранить</button>
    </div>

    <div class="talant__wrap">

      <div class="talant  talant--fury">
        <h2 class="talant__title">Неистовство</h2>
        <button class="talant__rem-btn"></button>
        <div class="talants__count">12</div>
        <div class="talant__row-two">
          <div class="talant__item"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-three">
          <div class="talant__item"></div>
          <div class="talant__item"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-two">
          <div class="talant__item  talant__item--inactive"></div>
          <div class="talant__item  talant__item--inactive"></div>
        </div>
        <div class="talant__row-three">
          <div class="talant__item"></div>
          <div class="talant__item  talant__item--inactive"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-two">
          <div class="talant__item"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-three">
          <div class="talant__item  talant__item--inactive"></div>
          <div class="talant__item"></div>
          <div class="talant__item  talant__item--inactive"></div>
        </div>
      </div>

      <div class="talant  talant--trick">
        <h2 class="talant__title">Хитрость</h2>
        <button class="talant__rem-btn"></button>
        <div class="talants__count">18</div>
        <div class="talant__row-two">
          <div class="talant__item"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-three">
          <div class="talant__item"></div>
          <div class="talant__item"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-two">
          <div class="talant__item  talant__item--inactive"></div>
          <div class="talant__item  talant__item--inactive"></div>
        </div>
        <div class="talant__row-three">
          <div class="talant__item"></div>
          <div class="talant__item  talant__item--inactive"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-two">
          <div class="talant__item"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-three">
          <div class="talant__item  talant__item--inactive"></div>
          <div class="talant__item"></div>
          <div class="talant__item  talant__item--inactive"></div>
        </div>
      </div>

      <div class="talant  talant--courage">
        <h2 class="talant__title">Храбрость</h2>
        <button class="talant__rem-btn"></button>
        <div class="talants__count">0</div>
        <div class="talant__row-two">
          <div class="talant__item"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-three">
          <div class="talant__item"></div>
          <div class="talant__item"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-two">
          <div class="talant__item  talant__item--inactive"></div>
          <div class="talant__item  talant__item--inactive"></div>
        </div>
        <div class="talant__row-three">
          <div class="talant__item"></div>
          <div class="talant__item  talant__item--inactive"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-two">
          <div class="talant__item"></div>
          <div class="talant__item"></div>
        </div>
        <div class="talant__row-three">
          <div class="talant__item  talant__item--inactive"></div>
          <div class="talant__item"></div>
          <div class="talant__item  talant__item--inactive"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['show'],
    data: function () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/style.scss';
</style>
