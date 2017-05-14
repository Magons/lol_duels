class Armor
  def initialize(armor)
    @armor = armor
  end

  def incoming_physical_damage
    @armor >= 0 ? have_armor : have_not_armor
  end

  private

  def have_armor
    100/(100 + @armor)
  end

  def have_not_armor
    2 - (100/(100 - @armor))
  end
end
