class Fighter
  attr_reader   :armor, :magic_resist,
                :health_regen, :mana, :damage, :level, :side,
                :base_attack_speed, :count_of_made_hits, :stats
  attr_accessor :time_left_to_ba, :time_dead, :health, :count_of_hits, :energy,
                :attack_speed, :attack_damage

  def initialize(stats, side, id, level)
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
    @side               = side
    @champion_id        = id
    @stuned             = false
    @invulnerable       = false
    @level              = level
    @stats              = stats
    @count_of_hits      = 0
    @count_of_made_hits = 0
    @time_left_to_ba    = 0
    @active_effects     = []
  end

  def damage(armor)
    @_damage ||= damage_multiplier(armor) * @attack_damage
  end

  def count_number_of_hits
    @count_of_hits = attack_speed + @time_left_to_ba
    @time_left_to_ba = @count_of_hits - @count_of_hits.to_i
    @count_of_hits = @count_of_hits.to_i
  end

  def increase_made_hits
    @count_of_made_hits += @count_of_hits
  end

  def attack_speed
    @attack_speed
  end

  def dead?
    @health <= 0
  end

  def name
    @_name ||= champion.data['key'].downcase.capitalize
  end

  private

  def champion
    @_champion ||= Champion.find(@champion_id)
  end

  def damage_multiplier(armor)
    @_damage_multiplier ||= if armor >= 0
                              100.0 / (100.0 + armor)
                            else
                              2 - (100.0 / (100.0 - armor))
                            end
  end
end
