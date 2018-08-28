class AbilityPerform
  ABILITY_ORDER = %w(Q W E R)


  def initialize(superman, batman)
    @superman = superman
    @batman = batman
    @time = 0
  end

  def execution
    @time += 1
    perform_passive
    perform_active
  end

  private

  def perform_passive
    passive_ability_executor(@superman, @batman).perform(@time)
    passive_ability_executor(@batman, @superman).perform(@time)
  end

  def perform_active
    active_ability_executor(@superman, @batman).perform(@time)
    active_ability_executor(@batman, @superman).perform(@time)
  end

  def passive_ability_executor(fighter, enemy)
    "Ability::#{fighter.name}::Passive".constantize.new(fighter, enemy)
  end

  def active_ability_executor(fighter, enemy)
    if fighter.abilities.size > 0
      ability = "Ability::#{fighter.name}::Q".constantize.new(fighter, enemy)
    else
      ability = 
    end
    fighter.abilities << ability
    ability
  end
end
