module Ability
  class Active << Ability::Base
    def initialize(fighter, enemy)
      @time_after_use = 0
    end

    def cooldown
      0
    end

    def available?
      @time_after_use > cooldown
    end
  end
end
