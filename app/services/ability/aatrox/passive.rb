module Ability
  module Aatrox
    class Passive < Ability::Passive
      # buff hellbent will be active ol fight, because energy will down only
      # when leave the fight
      def perform(time)
        if @fighter.count_of_made_hits % 3 == 0 && @fighter.energy < 100
          @fighter.energy += 20
        end
        if @fighter.energy == 100
          @fighter.add_buff(
            Buff.new('hellbent', {
              attack_speed: attack_speed_increase_by_passive,
              physical_damage: "25%"
            })
          )
        else
          @fighter.remove_buff('hellbent')
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

      def attack_speed_increase_by_passive
        if @level < 6
          "30%"
        elsif @level < 11
          "40%"
        elsif @level < 16
          "40%"
        elsif @level >= 16
          "60%"
        end
      end
    end
  end
end
