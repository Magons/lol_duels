class FightController < ApplicationController
  def index
  end

  def calculate
    calculate = Fight.new(fighters_params).calculate
    render json: calculate
  end

  def fighters_params
    params.require(:stats).permit!
  end
end
