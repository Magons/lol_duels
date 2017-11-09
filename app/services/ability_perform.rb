class AbilityPerform
  def initialize(superman, batman)
    @superman = superman
    @batman = batman
    @time = 0
  end

  def execution
    @time += 1
    perform_passive
  end

  private

  def perform_passive
    passive_ability_executor(@superman, @batman).perform(@time)
    passive_ability_executor(@batman, @superman).perform(@time)
  end

  def passive_ability_executor(fighter, enemy)
    "Ability::#{fighter.name}::Passive".constantize.new(fighter, enemy)
  end
end
