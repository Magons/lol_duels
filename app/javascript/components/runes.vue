<template>
  <div class="modal-runs" v-if="show">
    <button class="close-btn" @click="close()">Close</button>
    <h1 class="modal-runs__header">Руны</h1>
    <div class="modal-runs__wrap">
      <div class="modal-runs__user">tankop</div>
      <button class="modal-runs__rem-btn"></button>
      <button class="modal-runs__save-btn">Сохранить</button>
    </div>

    <div class="modal-runs__wrap">
      <div class="modal-runs__repository">
        <div class="modal-runs__rep-header">Хранилище рун</div>
        <div class="modal-runs__rep-wrap">
          <p class="modal-runs__sign">Знак</p>
          <ul class="modal-runs__item-list">
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
          </ul>
          <p class="modal-runs__sign">Знак</p>
          <ul class="modal-runs__item-list">
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
          </ul>
          <p class="modal-runs__sign">Знак</p>
          <ul class="modal-runs__item-list">
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
          </ul>
          <p class="modal-runs__sign">Знак</p>
          <ul class="modal-runs__item-list">
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
          </ul>
          <p class="modal-runs__sign">Знак</p>
          <ul class="modal-runs__item-list">
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
          </ul>
          <p class="modal-runs__sign">Знак</p>
          <ul class="modal-runs__item-list">
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
            <li class="modal-runs__item">Броня  (+0,91)</li>
          </ul>
        </div>

      </div>

      <div class="modal-runs__runs">

        <div class="modal-runs__circle1">
          <div class="modal-runs__circle2">
            <div class="modal-runs__circle3">

              <div class="modal-runs__orange-runs">
                <button class="modal-runs__o-rune1" type="button"></button>
                <button class="modal-runs__o-rune2" type="button"></button>
                <button class="modal-runs__o-rune3" type="button"></button>
                <button class="modal-runs__o-rune4" type="button"></button>
                <button class="modal-runs__o-rune5" type="button"></button>
                <button class="modal-runs__o-rune6" type="button"></button>
                <button class="modal-runs__o-rune7" type="button"></button>
                <button class="modal-runs__o-rune8" type="button"></button>
                <button class="modal-runs__o-rune9" type="button"></button>
              </div>

              <div class="modal-runs__red-runs">
                <button class="modal-runs__r-rune1" type="button"></button>
                <button class="modal-runs__r-rune2" type="button"></button>
                <button class="modal-runs__r-rune3" type="button"></button>
                <button class="modal-runs__r-rune4" type="button"></button>
                <button class="modal-runs__r-rune5" type="button"></button>
                <button class="modal-runs__r-rune6" type="button"></button>
                <button class="modal-runs__r-rune7" type="button"></button>
                <button class="modal-runs__r-rune8" type="button"></button>
                <button class="modal-runs__r-rune9" type="button"></button>
              </div>

              <div class="modal-runs__blue-runs">
                <button class="modal-runs__b-rune1" type="button"></button>
                <button class="modal-runs__b-rune2" type="button"></button>
                <button class="modal-runs__b-rune3" type="button"></button>
                <button class="modal-runs__b-rune4" type="button"></button>
                <button class="modal-runs__b-rune5" type="button"></button>
                <button class="modal-runs__b-rune6" type="button"></button>
                <button class="modal-runs__b-rune7" type="button"></button>
                <button class="modal-runs__b-rune8" type="button"></button>
                <button class="modal-runs__b-rune9" type="button"></button>
              </div>
              <div class="modal-runs__violet-runs">
                <button class="modal-runs__v-rune1" type="button"></button>
                <button class="modal-runs__v-rune2" type="button"></button>
                <button class="modal-runs__v-rune3" type="button"></button>
              </div>
              <div class="modal-runs__statistics">
                <h2 class="modal-runs__statistics-header">Статистика</h2>
                <div class="modal-runs__statistics-wrap">
                  <div class="modal-runs__statistics-left">
                    <p class="modal-runs__statistics-value">+9</p>
                    <p class="modal-runs__statistics-value">+16</p>
                    <p class="modal-runs__statistics-value">+12,1</p>
                  </div>
                  <div class="modal-runs__statistics-right">
                    <p class="modal-runs__statistics-title">Броня</p>
                    <p class="modal-runs__statistics-title">Сила атаки</p>
                    <p class="modal-runs__statistics-title">Сопротивление магии</p>
                  </div>
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
