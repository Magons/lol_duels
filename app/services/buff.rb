class Buff
  attr_reader :name, :effects

  def initialize(name, effects)
    @name = name
    @effects = effects
  end
end
