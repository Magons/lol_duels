class Fight
  def initialize(stats)
    @superman = Fighter.new(stats.as_json, 'left')
    @batman = Fighter.new(stats.as_json, 'right')
  end

  def calculate
    100 * time_to_kill_superman / (time_to_kill_batman + time_to_kill_superman)
  end

  private

  def time_to_kill_batman
    @batman.health / @superman.attack_speed * @superman.damage + @batman.health_regen
  end

  def time_to_kill_superman
    @superman.health / @batman.attack_speed * @batman.damage + @superman.health_regen
  end
end


# hello world
class Fight2

  def initialize( stats )
    # it will be the first hero
    @superman = Fighter.new(stats.stats.as_json ,  'left')
    # sorry but it will be second hero
    @batman = Fighter.new(stats.as_json , 'right')

  end

  # get damage for 1 second
  def get_damage(hero)

    hero.attack_damage * hero.attack_speed

  end

  # for future method must contain description of hero and enemy
  # Health Regeneration (also known as HP5) is a stat which determines
  # the amount of health regenerates over a 5-second period
  def get_result_after_damage( hero , enemy , damage )

    # code here
    hero.health -= damage

    # if hero alive return true else false
    if hero.health > 0
      true
    else
      false
    end

  end

  def make_hp_regeneration( left_hero , right_hero)
    left_hero.health += left_hero.health_regen
    right_hero.health += right_hero.health_regen
  end

  def calculate

    seconds = 0

    # 1 iteration is 1 second
    while true

      # superman is left, batman is right
      left_to_right_damage = get_damage(@superman)
      right_to_left_damage = get_damage( @batman )

      left_is_alive = get_result_after_damage( @superman , @batman , right_to_left_damage )
      right_is_alive = get_result_after_damage( @batman , @superman , left_to_right_damage)

      if not right_is_alive

      elsif not left_is_alive

      end

      #because hp regeneration is every 5 second we make flag
      if seconds % 5 == 0
        make_hp_regeneration(@superman , @batman)
      end

      seconds += 1

    end

  end

end
