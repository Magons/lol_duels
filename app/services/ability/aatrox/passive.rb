module Ability
  module Aatrox
    class Passive < Ability::Passive
      def perform(time)
        if @fighter.count_of_made_hits % 3 == 0 && @fighter.energy < 100
          @fighter.energy += 20
        end
        if @fighter.energy == 100
          @fighter.attack_speed = attack_speed_increase
          @fighter.attack_damage += attack_damage_increase
        else
          @fighter.attack_speed = @fighter.stats['AttackSpeed'][@fighter.side]
          @fighter.attack_damage = attack_damage
        end
      end

      private

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

      def attack_speed_increase
        base_attack_speed + (base_attack_speed * additional_attack_speed)
      end

      def base_attack_speed
        @fighter.base_attack_speed
      end

      def additional_attack_speed_increase
        additional_attack_speed + attack_speed_increase_by_passive
      end

      def additional_attack_speed
        @fighter.stats['AdditionalAttackSpeed'][@fighter.side]
      end

      def attack_speed_increase_by_passive
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
        attack_damage * 0.25
      end

      def attack_damage
        @fighter.stats['PhysicalDamage'][@fighter.side]
      end
    end
  end
end
