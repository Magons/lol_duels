module Ability
  class Base
    def initialize(fighter, enemy)
      @fighter = fighter
      @enemy = enemy
      @level = fighter.level
    end

    def permanent?
      false
    end

    def passive?
      false
    end

    def active?
      false
    end

    def cooldown
      0
    end

    def perform(time = 0)
      # raise 'Method not implemented'
    end
  end
end
