class Fight
  def initialize(stats, left_id, right_id, left_level, right_level)
    @superman = Fighter.new(stats.as_json,  'left', left_id, left_level)
    @batman = Fighter.new(stats.as_json, 'right', right_id, right_level)
  end

  def calculate
    seconds = 0
    # 1 iteration is 1 second
    while !(@batman.dead? && @superman.dead?) do
      # count number of hits which fiters will make in this second
      @batman.count_number_of_hits
      @superman.count_number_of_hits

      superman_damage = get_damage(@superman, @batman.armor)
      batman_damage = get_damage(@batman, @superman.armor)

      make_damage(@superman, batman_damage)
      make_damage(@batman, superman_damage)

      # puts "Superman damage: #{superman_damage}"
      # puts "Batman damage: #{batman_damage}"

      # puts "Superman health: #{@superman.health}"
      # puts "Batman health: #{@batman.health}"
      @batman.time_dead = seconds if @batman.dead? && @batman.time_dead == 0

      @superman.time_dead = seconds if @superman.dead? && @superman.time_dead == 0

      #because hp regeneration is every 5 second we make flag, it's not correct
      # if seconds % 5 == 0
      #   make_hp_regeneration
      # end

      @batman.increase_made_hits
      @superman.increase_made_hits
      seconds += 1

      perform_ability
    end
    results
  end

  private

  def perform_ability
    AbilityPerform.new(@superman, @batman).execution
  end

  def get_damage(hero, enemy_armor)
    hero.damage(enemy_armor) * hero.count_of_hits
  end

  # for future method must contain description of hero and enemy
  def make_damage(hero, damage)
    hero.hp_pool -= damage
  end

  # HP Regeneration determines the amount of health regenerates over a 5-second period
  def make_hp_regeneration
    @superman.hp_pool += @superman.hp_regen
    @batman.hp_pool += @batman.hp_regen
  end

  def use_passive_ability(hero)
    hero.passive_ability
  end

  def results
    {
      left: {
        time: @superman.time_dead,
        percent: percent_to_win(@superman),
        details: {}
      },
      right: {
        time: @batman.time_dead,
        percent: percent_to_win(@batman),
        details: {}
      }
    }
  end

  def percent_to_win(hero)
    100.0 * hero.time_dead / (@superman.time_dead + @batman.time_dead)
  end
end
