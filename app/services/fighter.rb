class Fighter
  attr_reader :attack_speed, :armor, :attack_damage, :health, :magic_resist, :health_regen,
              :mana, :damage

  def initialize(stats, side)
    @attack_speed  = stats['attackSpeed'][side]
    @armor         = stats['armor'][side]
    @attack_damage = stats['attackDamage'][side]
    @health        = stats['health'][side]
    @magic_resist  = stats['magicResistance'][side]
    @health_regen  = stats['healthRegeneration'][side]
    @mana          = stats['mana'][side]
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
