require 'Random'

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
      # calculating damage multiplier
      damage_multiplier_superman = calculate_critical_damage(superman,superman_damage)
      damage_multiplier_batman = calculate_critical_damage(batman,batman_damage)

      make_damage(@superman, batman_damage * damage_multiplier_batman )
      make_damage(@batman, superman_damage * damage_multiplier_superman )

      # puts "Superman damage: #{superman_damage}"
      # puts "Batman damage: #{batman_damage}"

      # puts "Superman health: #{@superman.health}"
      # puts "Batman health: #{@batman.health}"
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

  def calculate_critical_damage(hero, hero_to_enemy_damage)
    critical_damage = hero_to_enemy_damage
    random_number = Random.new(hero.crit_chance)
    if random_number == hero.crit_chance
      # if bonus_critical_damage = 100 then damage_multiplier = 1 + (0.38* 101)
      # then damage_multiplier = 40 ???
      damage_multiplier = 1 + (hero.crit_chance * ( 1 + critical_damage ))
      return hero_to_enemy_damage * damage_multiplier
    else
      return 1
    end
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
    100.0 * hero.time_dead / (@superman.time_dead + @batman.time_dead)
  end
end
