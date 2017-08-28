module Ability
  class Passive
    def initialize(fighter, level)
      @fighter = fighter
      @level = level
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

    def increase_stats
      {}
    end

    def decrease_enemy_stats
      {}
    end

    def active_effect
      nil
    end
  end
end
