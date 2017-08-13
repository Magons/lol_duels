class Fighter
  attr_reader :attack_speed, :armor, :attack_damage, :health, :magic_resist,
              :health_regen, :mana, :damage

  def initialize(stats, side)
    @attack_speed      = stats['AttackSpeed'][side]
    @armor             = stats['Armor'][side]
    @attack_damage     = stats['PhysicalDamage'][side]
    @health            = stats['HPPool'][side]
    @magic_resist      = stats['SpellBlock'][side]
    @health_regen      = stats['HPRegen'][side]
    @armor_penetration = stats['ArmorPenetration'][side]
    @life_steal        = stats['LifeSteal'][side]
    @attack_range      = stats['AttackRange'][side]
    @mp_regeneration   = stats['MPRegeneration'][side]
    @magic_penetration = stats['MagicPenetration'][side]
    @tenacity          = stats['Tenacity'][side]
    @crit_chance       = stats['CritChance'][side]
    @magic_damage      = stats['MagicDamage'][side]
    @cooldown          = stats['Cooldown'][side]
    @movement_speed    = stats['MovementSpeed'][side]
    @crit_damage       = stats['CritDamage'][side]
    @hp                = stats['HP'][side]
    @magic_resistance  = stats['magicResistance'][side]
    @mp                = stats['MP'][side]
    @energy_regen      = stats['EnergyRegen'][side]
    @energy_pool       = stats['EnergyPool'][side]
    @dodge             = stats['Dodge'][side]
    @block             = stats['Block'][side]
    @energy            = stats['Energy'][side]
    @gold_per_10       = stats['GoldPer10'][side]
    @time_dead         = stats['TimeDead'][side]
    # damage multiplier calculate only once
    @damage_multiplier = damage_multiplier
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
