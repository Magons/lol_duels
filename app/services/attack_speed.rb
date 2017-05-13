class AttackSpeed
  def initialize(offset)
    @offset = offset
  end

  def base
    0.625/(1 + @offset)
  end
end
