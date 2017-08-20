class Fight
  def initialize(stats)
    @superman = Fighter.new(stats.as_json,  'left')
    @batman = Fighter.new(stats.as_json, 'right')
  end

  def calculate
    seconds = 0
    # 1 iteration is 1 second
    while !(@batman.dead? && @superman.dead?) do
      superman_damage = get_damage(@superman, @batman.armor)
      batman_damage = get_damage(@batman, @superman.armor)

      make_damage(@superman, batman_damage)
      make_damage(@batman, superman_damage)


      @batman.time_dead = seconds if @batman.dead? && @batman.time_dead == 0

      @superman.time_dead = seconds if @superman.dead? && @superman.time_dead == 0

      #because hp regeneration is every 5 second we make flag
      if seconds % 5 == 0
        make_hp_regeneration
      end

      seconds += 1
    end
    results
  end

  private

  def get_damage(hero, enemy_armor)
    count_of_hits = hero.attack_speed + hero.time_left_to_basic_attack
    hero.time_left_to_basic_attack = count_of_hits - count_of_hits.to_i
    hero.damage(enemy_armor) * count_of_hits.to_i
  end

  # for future method must contain description of hero and enemy
  def make_damage(hero, damage)
    hero.health -= damage
  end

  # HP Regeneration determines the amount of health regenerates over a 5-second period
  def make_hp_regeneration
    @superman.health += @superman.health_regen
    @batman.health += @batman.health_regen
  end

  def results
    {
      left: {
        time: @superman.time_dead,
        percent: percent_to_win(@superman)
      },
      right: {
        time: @batman.time_dead,
        percent: percent_to_win(@batman)
      }
    }
  end

  def percent_to_win(hero)
    100 * hero.time_dead / (@superman.time_dead + @batman.time_dead)
  end
end
