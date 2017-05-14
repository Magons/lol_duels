class Fight
  def initialize(left_champion, right_champion)
    @left_champion = left_champion.as_json
    @right_champion = right_champion.as_json
  end

  def calculate
    100 * time_to_win(@left_champion, @right_champion)/
      (
        time_to_win(@left_champion, @right_champion) +
        time_to_win(@right_champion, @left_champion)
      )
  end

  def time_to_win(enemy, fighter)
    count_of_hits(
      enemy['stats']['hp'], fighter['stats']['attackdamage'], enemy['stats']['armor']
    ) / attack_speed(fighter)
  end

  def count_of_hits(enemy_hp, attack_damage, armor)
    (enemy_hp/(attack_damage * Armor.new(armor).incoming_physical_damage)).ceil
  end

  def attack_speed(fighter)
    AttackSpeed.new(fighter['stats']['attackspeedoffset']).base
  end
end
