class Fighter
  attr_reader :armor, :attack_damage, :magic_resist,
              :health_regen, :mana, :damage
  attr_accessor :time_left_to_basic_attack, :time_dead, :health

  def initialize(stats, side, id)
    @base_attack_speed  = stats['BasicAttackSpeed'][side]
    @attack_speed       = stats['AttackSpeed'][side]
    @armor              = stats['Armor'][side]
    @attack_damage      = stats['PhysicalDamage'][side]
    @base_attack_damage = stats['BasePhysicalDamage'][side]
    @health             = stats['HPPool'][side]
    @magic_resist       = stats['SpellBlock'][side]
    @health_regen       = stats['HPRegen'][side]
    @armor_penetration  = stats['ArmorPenetration'][side]
    @life_steal         = stats['LifeSteal'][side]
    @attack_range       = stats['AttackRange'][side]
    @mp_regeneration    = stats['MPRegeneration'][side]
    @magic_penetration  = stats['MagicPenetration'][side]
    @tenacity           = stats['Tenacity'][side]
    @crit_chance        = stats['CritChance'][side]
    @magic_damage       = stats['MagicDamage'][side]
    @cooldown           = stats['Cooldown'][side]
    @movement_speed     = stats['MovementSpeed'][side]
    @crit_damage        = stats['CritDamage'][side]
    @hp                 = stats['HP'][side]
    @magic_resistance   = stats['magicResistance'][side]
    @mp                 = stats['MP'][side]
    @energy_regen       = stats['EnergyRegen'][side]
    @energy_pool        = stats['EnergyPool'][side]
    @dodge              = stats['Dodge'][side]
    @block              = stats['Block'][side]
    @energy             = stats['Energy'][side]
    @gold_per_10        = stats['GoldPer10'][side]
    @time_dead          = stats['TimeDead'][side]
    @champion_id        = id
    @stuned             = false
    @time_left_to_basic_attack = 0
  end

  def damage(armor)
    @_damage ||= damage_multiplier(armor) * @attack_damage
  end

  def attack_speed
    if passive_ability_executor.passive? && increased_stats[:attack_speed]
      increased_stats[:attack_speed]
    else
      @attack_speed
    end
  end

  def dead?
    @health <= 0
  end

  def passive_ability
    passive_ability_executor
  end

  private

  def champion_name
    @_champion_name ||= Champion.find(@champion_id).data['key']
  end

  def passive_ability_executor
    @_passive_ability_executor ||= "Ability::#{champion_name}::Passive".constantize.new(self, 1)
  end

  def increased_stats
    passive_ability_executor.increase_stats
  end

  def damage_multiplier(armor)
    @_damage_multiplier ||= if armor >= 0
                              100.0 / (100.0 + armor)
                            else
                              2 - (100.0 / (100.0 - armor))
                            end
  end
end
