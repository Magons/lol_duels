class Buff
  attr_reader :name, :effects

  def initialize(name, effects)
    @name = name
    @effects = effects
  end

  def value(stat_name)
    @effects[stat_name]
  end
end
