class Fighter
  attr_reader :attack_speed, :armor, :attack_damage, :health, :magic_resist, :health_regen,
              :mana, :damage

  def initialize(stats, side)
    @attack_speed  = stats['AttackSpeed'][side]
    @armor         = stats['Armor'][side]
    @attack_damage = stats['PhysicalDamage'][side]
    @health        = stats['HP'][side]
    @magic_resist  = stats['SpellBlock'][side]
    @health_regen  = stats['HPRegen'][side]
    @mana          = stats['MPPool'][side]
  end

  def damage
    @_damage ||= damage_multiplier * @attack_damage
  end

  private

  def damage_multiplier
    @_damage_multiplier ||= if @armor >= 0
                              100 / (100 + @armor)
                            else
                              2 - (100 / (100 - @armor))
                            end
  end
end
