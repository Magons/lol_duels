class Stats
  LIST_OF_STATS = {
    hp_regen:                'HPRegen',
    base_hp_regen:           'BaseHPRegen',
    armor_penetration:       'ArmorPenetration',
    life_steal:              'LifeSteal',
    attack_range:            'AttackRange',
    mp_regeneration:         'MPRegeneration',
    base_mana_regen:         'BaseManaRegen',
    magic_penetration:       'MagicPenetration',
    spell_vamp:              'SpellVamp',
    tenacity:                'Tenacity',
    physical_damage:         'PhysicalDamage',
    base_physical_damage:    'BasePhysicalDamage',
    armor:                   'Armor',
    basic_attack_speed:      'BasicAttackSpeed',
    additional_attack_speed: 'AdditionalAttackSpeed',
    attack_speed:            'AttackSpeed',
    crit_chance:             'CritChance',
    magic_damage:            'MagicDamage',
    spell_block:             'SpellBlock',
    cooldown:                'Cooldown',
    movement_speed:          'MovementSpeed',
    hp_pool:                 'HPPool',
    mp_pool:                 'MPPool',
    crit_damage:             'CritDamage',
    damage_amplification:    'damageAmplification',
    hp:                      'HP',
    magic_resistance:        'magicResistance',
    mp:                      'MP',
    energy_regen:            'EnergyRegen',
    energy_pool:             'EnergyPool',
    dodge:                   'Dodge',
    block:                   'Block',
    energy:                  'Energy',
    gold_per_10:             'GoldPer10',
    time_dead:               'TimeDead'
  }

  def initialize(stats, side)
    LIST_OF_STATS.each do |key, value|
      instance_variable_set("@#{key}", stats[value][side])
    end
  end

  LIST_OF_STATS.each do |key, name|
    define_method :"#{key}" do |value = nil|
      return send("buff_#{key}", value) if value.present?
      instance_variable_get("@#{key}")
    end

    define_method("#{key}=") do |val|
      instance_variable_set("@#{key}", val)
    end
  end

  private

  def parce_value(value)
    if value.match('%') # if this percent value
      value.match(/\d+/)[0].to_f / 100
    else
      value
    end
  end

  def buff_attack_speed(value)
    @basic_attack_speed + (@basic_attack_speed * (parce_value(value) + @additional_attack_speed))
  end

  def buff_physical_damage(value)
    additional_attack_damage = @physical_damage - @base_physical_damage
    @base_physical_damage * parce_value(value) + additional_attack_damage
  end
end
