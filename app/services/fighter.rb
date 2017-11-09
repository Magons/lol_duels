class Fighter
  attr_reader   :level, :count_of_made_hits, :stats
  attr_accessor :time_left_to_ba, :count_of_hits

  def initialize(stats, side, id, level)
    @champion_id        = id
    @stuned             = false
    @side               = side
    @invulnerable       = false
    @level              = level
    @stats              = Stats.new(stats, side)
    @count_of_hits      = 0
    @count_of_made_hits = 0
    @time_left_to_ba    = 0 #time left ot basic attak
    @buffs              = []
  end

  def damage(armor)
    damage_multiplier(armor) * physical_damage
  end

  def count_number_of_hits
    @count_of_hits = attack_speed + @time_left_to_ba
    @time_left_to_ba = @count_of_hits - @count_of_hits.to_i
    @count_of_hits = @count_of_hits.to_i
  end

  def increase_made_hits
    @count_of_made_hits += @count_of_hits
  end

  def dead?
    hp_pool <= 0
  end

  def name
    @_name ||= champion.data['key'].downcase.capitalize
  end

  def add_buff(buff)
    @buffs << buff
  end

  def has_buff?(name)
    @buffs.map(&:name).include?(name)
  end

  def remove_buff(name)
    @buffs.map { |buff| buff if buff.name != name }
  end

  def method_missing(method_sym, *arguments, &block)
    if @stats.respond_to?(method_sym)
      if method_sym.to_s.include?('=')
        @stats.send(method_sym, *arguments)
      else
        puts "Buffs count - #{@side}: #{@buffs.count}"
        @buffs.each do |buff|
          arguments << { method_sym => buff.value(method_sym) } if buff.value(method_sym)
        end
        puts "#{method_sym} - #{@side}: #{@stats.send(method_sym, *arguments)} arg: #{arguments}"
        @stats.send(method_sym, *arguments)
      end
    else
      super
    end
  end

  private

  def champion
    @_champion ||= Champion.find(@champion_id)
  end

  def damage_multiplier(armor)
    if armor >= 0
      100.0 / (100.0 + armor)
    else
      2 - (100.0 / (100.0 - armor))
    end
  end

  def parce_value(value)
    if value.match('%') # if this percent value
      value.match(/\d+/)[0].to_f / 100
    else
      value
    end
  end
end
