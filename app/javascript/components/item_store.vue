<template>
  <div class="container" v-if="show">
    <button class="container-close" type="button" title="Закрыть" @click="$emit('close')"></button>
    <button class="recommended-btn" type="button">Рекомендованные</button>
    <button class="all-items-btn" type="button">Все предметы</button>
    <div class="content">
      <div class="content-left">
        <div class="search-items">
          <input type="text">
          <button type="button" class="btn-table" title="Таблицей"></button>
          <button type="button" class="btn-list" title="Списком"></button>
        </div>
        <div class="wrapper">
          <div class="wrap-reccomended">
            <div class="row-3">
            <p>Начальные предметы</p>
              <div class="icon-3">
                <div class="left-pic">
                  <img src="" alt="" width="38" height="38">
                  <p>0</p>
                </div>
                <div class="right-dis">
                  <p>Древняя монета</p>
                  <span>Дает золото, когда неподалеку кто-то другой убивает вражеского миньйона</span>
                </div>
              </div>
              <div class="icon-3">
                <div class="left-pic">
                  <img src="" alt="" width="38" height="38">
                  <p>0</p>
                </div>
                <div class="right-dis">
                  <p>Древняя монета</p>
                  <span>Дает золото, когда неподалеку кто-то другой убивает вражеского миньйона</span>
                </div>
              </div>
              <div class="icon-3">
                <div class="left-pic">
                  <img src="" alt="" width="38" height="38">
                  <p>0</p>
                </div>
                <div class="right-dis">
                  <p>Древняя монета</p>
                  <span>Дает золото, когда неподалеку кто-то другой убивает вражеского миньйона</span>
                </div>
              </div>
            </div>
            <div class="row-3">
            <p>Начальные предметы</p>
              <div class="icon-3">
                <div class="left-pic">
                  <img src="" alt="" width="38" height="38">
                  <p>0</p>
                </div>
                <div class="right-dis">
                  <p>Древняя монета</p>
                  <span>Дает золото, когда неподалеку кто-то другой убивает вражеского миньйона</span>
                </div>
              </div>
              <div class="icon-3">
                <div class="left-pic">
                  <img src="" alt="" width="38" height="38">
                  <p>0</p>
                </div>
                <div class="right-dis">
                  <p>Древняя монета</p>
                  <span>Дает , когда неподалеку когда неподалекукогда неподалекукогда когда неподалекукогда неподалекукогда неподалеку неподалекукогда неподалеку кто-то другой убивает вражеского миньйона</span>
                </div>
              </div>
              <div class="icon-3">
                <div class="left-pic">
                  <img src="" alt="" width="38" height="38">
                  <p>0</p>
                </div>
                <div class="right-dis">
                  <p>Древняя монета</p>
                  <span>Дает золото, когда неподалеку кто-то другой убивает вражеского миньйона</span>
                </div>
              </div>
            </div>
            <div class="row-3">
            <p>Начальные предметы</p>
              <div class="icon-3">
                <div class="left-pic">
                  <img src="" alt="" width="38" height="38">
                  <p>0</p>
                </div>
                <div class="right-dis">
                  <p>Древняя монета</p>
                  <span>Дает золото, когда неподалеку кто-то другой убивает вражеского миньйона</span>
                </div>
              </div>
              <div class="icon-3">
                <div class="left-pic">
                  <img src="" alt="" width="38" height="38">
                  <p>0</p>
                </div>
                <div class="right-dis">
                  <p>Древняя монета</p>
                  <span>Дает золото, когда неподалеку кто-то другой убивает вражеского миньйона</span>
                </div>
              </div>
              <div class="icon-3">
                <div class="left-pic">
                  <img src="" alt="" width="38" height="38">
                  <p>0</p>
                </div>
                <div class="right-dis">
                  <p>Древняя монета</p>
                  <span>Дает золото, когда неподалеку кто-то другой убивает вражеского миньйона</span>
                </div>
              </div>
            </div>
          </div>
          <div class="wrap-all-items">
            <div class="block-1">
              <p>Все предметы</p>
              <ul class="list"><b>Начальные предметы</b>
                <li>
                  <label>
                  Игра в лесу<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Игра на линии<input type="checkbox"><i></i>
                  </label>
                </li>
              </ul>
              <ul class="list"><b>Инструменты</b>
                <li>
                  <label>
                  Расходуемые товары<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Золото<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Обзор и аксессуары<input type="checkbox"><i></i>
                  </label>
                </li>
              </ul>
              <ul class="list"><b>Защита</b>
                <li>
                  <label>
                  Броня<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Здоровье<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Восстановление здоровья<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                    Сопротивление магии<input type="checkbox"><i></i>
                  </label>
                </li>
              </ul>
              <ul class="list"><b>Атака</b>
                <li>
                  <label>
                  Скорость атаки<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Критический удар<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Урон<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Вампиризм<input type="checkbox"><i></i>
                  </label>
                </li>
              </ul>
              <ul class="list"><b>Магия</b>
                <li>
                  <label>
                  Сокращение перезарядки<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Мана<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Восстановление маны<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Сила умений<input type="checkbox"><i></i>
                  </label>
                </li>
              </ul>
              <ul class="list"><b>Передвижение</b>
                <li>
                  <label>
                  Ботинки<input type="checkbox"><i></i>
                  </label>
                </li>
                <li>
                  <label>
                  Другое<input type="checkbox"><i></i>
                  </label>
                </li>
              </ul>
            </div>
            <div class="block-view">
              <div class="block-2">
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                  <div class="icon">
                    <div class="pic">
                      <img src="" alt="pic" width="38" height="38">
                    </div>
                    <div class="price">
                      0
                    </div>
                  </div>
                </div>
              </div>
              <div class="block-2-2">
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      00
                  </div>
                  <div class="icon-2-discription">Палка-убивалка</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      000
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0000
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      00000
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      000000
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      1111111
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
                <div class="icon-2">
                  <div class="pic">
                    <img src="" alt="pic" width="38" height="38">
                  </div>
                  <div class="price">
                      0
                  </div>
                  <div class="icon-2-discription">Палка-убивалка троллей</div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="block-3">
          <div class="left">
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
          </div>
          <div class="middle">
            <div class="pic">
              <img src="" alt="pic" width="38" height="38">
            </div>
          </div>
          <div class="right">
            <button class="btn">ПРОДАТЬ</button>
            <button class="btn">ВЕРНУТЬ</button>
          </div>
          </div>
      </div>
      <div class="content-right">
        <div class="gallery">
          <p>Схемы развития:</p>
          <button class="prev"></button>
          <div class="content">
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
              <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
          </div>
          <button class="next"></button>
        </div>
        <div class="module-1">
          <p>Требуется:</p>
          <div class="row-1">
            <div class="icon">
              <div class="pic">
                <img src="" alt="pic" width="38" height="38">
              </div>
              <div class="price">
                0
              </div>
            </div>
          </div>
          <div class="row-2">
            <div class="icon">
              <div class="pic">
                <img src="" alt="pic" width="38" height="38">
              </div>
              <div class="price">
                0
              </div>
            </div>
            <div class="icon">
              <div class="pic">
                <img src="" alt="pic" width="38" height="38">
              </div>
              <div class="price">
                0
              </div>
            </div>
          </div>
        </div>
        <div class="container-discription">
          <div class="item-buy">
            <div class="pic">
                <img src="" alt="pic" width="38" height="38">
            </div>
            <div class="name">Боевой молот Колфилда</div>
            <div class="price">1100</div>
            <button class="buy-btn">КУПИТЬ</button>
          </div>
          <div class="discription">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['show'],
    created () {
      // this.getChampions()
    },
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'champions',
        'searchString'
      ]),
      name: {
        get () {
          return this.searchString
        },
        set (value) {
          this.$store.commit('setSearchString', { value })
        }
      }
    },
    methods: {
      ...mapActions([
        'getChampions'
      ]),
      setLeftChampion (champion) {
        this.$store.commit('setLeftChampion', { value: champion })
        this.close()
      },
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/style.scss';
</style>
