<template>
  <div id='app'>
    <header class="header">
      <div class="header__container">
        <div class="header__logo">
          <img src="./img/header-logo.jpg" alt="League of Legends" width="310" height="123" class="header__logo-img">
        </div>
        <div class="header__user-block">
          <button class="header__user-btn" type="button">Вход</button>
          <button class="header__user-btn" type="button">Регистрация</button>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="main__container">
        <div class="sidebar  sidebar--left">
          <button class="sidebar__choose-btn" type="button" @click="showChampions = !showChampions">Выбор чемпиона</button>
          <h2 class="sidebar__characteristics">Характеристики:</h2>
          <ul class="sidebar__parameter-list">
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"hp":</p>
              <p class="sidebar__param-val">537.8</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"hpperlevel":</p>
              <p class="sidebar__param-val">85.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"mp":</p>
              <p class="sidebar__param-val">105.6</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"mpperlevel":</p>
              <p class="sidebar__param-val">45.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"movespeed":</p>
              <p class="sidebar__param-val">345.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"armor":</p>
              <p class="sidebar__param-val">24.384</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"armorperlevel":</p>
              <p class="sidebar__param-val">3.8</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"spellblock":</p>
              <p class="sidebar__param-val">32.1</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"spellblockperlevel":</p>
              <p class="sidebar__param-val">1.25</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackrange":</p>
              <p class="sidebar__param-val">150.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"hpregen":</p>
              <p class="sidebar__param-val">6.59</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"hpregenperlevel":</p>
              <p class="sidebar__param-val">0.5</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"mpregen":</p>
              <p class="sidebar__param-val">0.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"mpregenperlevel":</p>
              <p class="sidebar__param-val">0.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"crit":</p>
              <p class="sidebar__param-val">0.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"critperlevel":</p>
              <p class="sidebar__param-val">0.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackdamage":</p>
              <p class="sidebar__param-val">60.376</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackdamageperlevel":</p>
              <p class="sidebar__param-val">3.2</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackspeedoffset":</p>
              <p class="sidebar__param-val">-0.04</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackspeedperlevel":</p>
              <p class="sidebar__param-val">3.0</p>
            </li>
          </ul>

           <button class="sidebar__yellow-btn" type="button">Магазин</button>
           <button class="sidebar__yellow-btn" type="button">Руны</button>
           <button class="sidebar__yellow-btn" type="button">Таланты</button>

           <label for="act-skills-left" class="sidebar__active-skills">
             Использовать активные способности
             <input type="checkbox" class="sidebar__checkbox" id="act-skills-left" checked>
             <i class="sidebar__empty"></i>
           </label>
           <label for="act-spell-left" class="sidebar__active-skills">
             Использовать заклинания призывателя
             <input type="checkbox" class="sidebar__checkbox" id="act-spell-left">
             <i class="sidebar__empty"></i>
           </label>

        </div> <!-- end of sidebar  sidebar--left -->

        <section class="center">
          <h1 class="center__header">Вероятность победы</h1>
          <div class="center__indicator">
            <div class="center__indicator-inner"></div>
          </div>
          <div class="center__ratio">
            <div class="center__ratio-left">30%</div>
            <div class="center__ratio-right">70%</div>
          </div>
          <div class="center__heroes">
            <div class="center__hero  center__hero--left">
              <div class="center__hero-pic">
                <p class="center__hero-name">Vi the Piltover enforcer</p>
              </div>
              <ul class="center__hero-items">
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
              </ul>
            </div>
            <div class="center__vs">VS</div>
            <div class="center__hero  center__hero--right">
              <div class="center__hero-pic">
                <p class="center__hero-name">Vi the Piltover enforcer</p>
              </div>
              <ul class="center__hero-items">
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
              </ul>
            </div>
          </div>
        </section>

        <div class="sidebar  sidebar--right">
          <button class="sidebar__choose-btn" type="button">Выбор чемпиона</button>
          <h2 class="sidebar__characteristics">Характеристики:</h2>
          <ul class="sidebar__parameter-list">
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"hp":</p>
              <p class="sidebar__param-val">537.8</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"hpperlevel":</p>
              <p class="sidebar__param-val">85.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"mp":</p>
              <p class="sidebar__param-val">105.6</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"mpperlevel":</p>
              <p class="sidebar__param-val">45.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"movespeed":</p>
              <p class="sidebar__param-val">345.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"armor":</p>
              <p class="sidebar__param-val">24.384</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"armorperlevel":</p>
              <p class="sidebar__param-val">3.8</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"spellblock":</p>
              <p class="sidebar__param-val">32.1</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"spellblockperlevel":</p>
              <p class="sidebar__param-val">1.25</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackrange":</p>
              <p class="sidebar__param-val">150.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"hpregen":</p>
              <p class="sidebar__param-val">6.59</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"hpregenperlevel":</p>
              <p class="sidebar__param-val">0.5</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"mpregen":</p>
              <p class="sidebar__param-val">0.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"mpregenperlevel":</p>
              <p class="sidebar__param-val">0.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"crit":</p>
              <p class="sidebar__param-val">0.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"critperlevel":</p>
              <p class="sidebar__param-val">0.0</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackdamage":</p>
              <p class="sidebar__param-val">60.376</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackdamageperlevel":</p>
              <p class="sidebar__param-val">3.2</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackspeedoffset":</p>
              <p class="sidebar__param-val">-0.04</p>
            </li>
            <li class="sidebar__parameter">
              <p class="sidebar__param-title">"attackspeedperlevel":</p>
              <p class="sidebar__param-val">3.0</p>
            </li>
          </ul>

           <button class="sidebar__yellow-btn" type="button" @click="showShop = !showShop">Магазин</button>
           <button class="sidebar__yellow-btn" type="button" @click="showRunes = !showRunes">Руны</button>
           <button class="sidebar__yellow-btn" type="button" @click="showTalants = !showTalants">Таланты</button>

           <label for="act-skills-right" class="sidebar__active-skills">
             Использовать активные способности
             <input type="checkbox" class="sidebar__checkbox" id="act-skills-right" checked>
             <i class="sidebar__empty"></i>
           </label>
           <label for="act-spell-right" class="sidebar__active-skills">
             Использовать заклинания призывателя
             <input type="checkbox" class="sidebar__checkbox" id="act-spell-right">
             <i class="sidebar__empty"></i>
           </label>

        </div><!-- end of sidebar  sidebar--right -->

      </div>
    </main>

    <footer class="footer">
      <div class="footer__container">
        <div class="footer__logo">
          <img src="./img/header-logo.jpg" alt="League of Legends" width="310" height="123" class="header__logo-img">
        </div>
        <div class="footer__copyrights">league of legens © 2017</div>
      </div>
    </footer>

    <champions :show="showChampions" @close="showChampions = false"></champions>

    <talants :show="showTalants" @close="showTalants = false"></talants>

    <runes :show="showRunes" @close="showRunes = false"></runes>

    </div>
  </div>
</template>

<script>
  import talants from './talants'
  import runes from './runes'
  import champions from './champions'

  export default {
    data: function () {
      return {
        showRunes: false,
        showTalants: false,
        showShop: false,
        showChampions: false
      }
    },
    components: {
      talants,
      runes,
      champions
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/style.scss';
</style>
