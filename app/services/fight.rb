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
