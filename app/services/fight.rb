# class Fight
#   def initialize(stats)
#     @superman = Fighter.new(stats.as_json, 'left')
#     @batman = Fighter.new(stats.as_json, 'right')
#   end

#   def calculate
#     100 * time_to_kill_superman / (time_to_kill_batman + time_to_kill_superman)
#   end

#   private

#   def time_to_kill_batman
#     @batman.health / @superman.attack_speed * @superman.damage + @batman.health_regen
#   end

#   def time_to_kill_superman
#     @superman.health / @batman.attack_speed * @batman.damage + @superman.health_regen
#   end
# end

class Fight
  def initialize( stats )
    # it will be the first hero
    @superman = Fighter.new(stats.stats.as_json,  'left')
    # sorry but it will be second hero
    @batman = Fighter.new(stats.as_json, 'right')
  end

  # get damage for 1 second
  def get_damage(hero, enemy_armor)
    # attack_speed measured and displayed as attacks per second
    hero.damage(enemy_armor) * hero.attack_speed
  end

  # for future method must contain description of hero and enemy
  def get_result_after_damage(hero, enemy, damage)
    hero.health -= damage * enemy.damage_multiplier
    # if hero alive return true else false
    hero.health <= 0 ? true : false
  end

  # HP Regeneration determines the amount of health regenerates over a 5-second period
  def make_hp_regeneration
    @superman.health += @superman.health_regen
    @batman.health += @batman.health_regen
  end

  def calculate
    seconds = 0
    # 1 iteration is 1 second
    while true
      superman_damage = get_damage(@superman, @batman.armor)
      batman_damage = get_damage(@batman, @superman.armor)

      superman_is_dead = get_result_after_damage(@superman, @batman, superman_damage)
      batman_is_dead = get_result_after_damage(@batman, @superman, batman_damage)

      if batman_is_dead
        @batman.time_dead = seconds
      elsif superman_is_dead
        @superman.time_dead = seconds
      end

      #because hp regeneration is every 5 second we make flag
      if seconds % 5 == 0
        make_hp_regeneration
      end

      seconds += 1
    end
  end
end
