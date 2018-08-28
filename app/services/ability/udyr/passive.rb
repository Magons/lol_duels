module Ability
  module Udyr
    class Passive < Ability::Base
      def permanent?
        false
      end

      def passive?
        false
      end

      def active?
        true
      end

      def condition_for_active

      end

      def cooldown
        if @level < 6
          180
        elsif @level < 11
          160
        elsif @level < 16
          140
        elsif @level >= 16
          120
        end
      end

      def increase_stats
        {
          attack_speed: attack_speed_increase,
          attack_damage: attack_damage_increase
        }
      end

      def attack_speed_increase
        if @level < 6
          0.3
        elsif @level < 11
          0.4
        elsif @level < 16
          0.5
        elsif @level >= 16
          0.6
        end
      end

      def attack_damage_increase
        0.25
      end

      def active_effect

      end

      def passive_effect

      end

      private

      def method_name

      end
    end
  end
end
